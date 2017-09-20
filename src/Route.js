import InfiniteLoopException from './exceptions/InfiniteLoopException';
import NullResourceException from './exceptions/NullResourceException';
import HttpVerb from './HttpVerb';
import UrlParams from './UrlParams';

export default class Route
{

    constructor(verb, uri, action, group = null)
    {
        this.httpVerbs = new HttpVerb(verb);
        this.unprocessedUri = uri;
        this.routeAction = action;
        this.group = group;
    }

    // Return a string representation of the object.
    toString()
    {
        return this.toArray().join(' , ');
    }

    // Returns an array representation of the object.
    toArray()
    {
        return [this.verbs().join('/'), this.uri(), this.action(), this.name()];
    }

    // Validation when substiting $ placeholder to avoid infinite loops.
    static validateGroup(string)
    {
        if(typeof string !== 'string') return;
        if(string.indexOf('$') !== -1)
        {
            throw new InfiniteLoopException('Resource name may not contain the dollar ($) character.');
        }
    }

    // Substitute $ placeholders with resource name.
    substituteResource(uriString)
    {
        Route.validateGroup(this.group);
        while(uriString.indexOf('$') !== -1)
        {
            if(this.group === null || this.group === undefined) throw new NullResourceException('This url requires a resource name.');
            uriString = uriString.replace('$', this.group);
        }
        return uriString;
    }

    // Default to empty parameters.
    url(paramValues = null, requireLeadingSlash = true)
    {
        // Only create parameters once
        let params = this.urlParameters();

        // Check if required parameters were given
        if(params.areRequired() && paramValues === null)
        {
            let required = params.required().join();
            throw new NullResourceException(`Url '${this.uri()}' requires the following parameters: (${required}). None given.`);
        }

        // Replace placeholders and bind parameters
        let bindGetParameters = this.verb().toLowerCase() === 'get';
        let url = params.bind(paramValues, bindGetParameters);

        // Append missing leading slash if required.
        if(requireLeadingSlash && url.charAt(0) !== '/') url = '/'+url;
        return url;
    }

    uri()
    {
        return this.substituteResource(this.unprocessedUri);
    }

    urlParameters()
    {
        return new UrlParams(this.uri());
    }

    verb()
    {
        return this.httpVerbs.first();
    }

    method()
    {
        return this.verb();
    }

    verbs()
    {
        return this.httpVerbs.all();
    }

    action()
    {
        return this.routeAction;
    }

    name()
    {
        if(this.group !== null) return `${this.group}.${this.action()}`;
        return this.action();
    }
}
