import NullResourceException from './exceptions/NullResourceException';
import HttpVerb from './HttpVerb';
import UrlParams from './UrlParams';

export default class Route
{

    constructor(verb, uri, action, resourceName)
    {
        // $ in resource name would cause an infinite loop
        this.verb = new HttpVerb(verb);
        this.uri = uri;
        this.action = action;
        this.name =  `${resourceName}.${action}`;
        this.resourceName = resourceName;
    }

    verb()
    {
        return this.verb.first();
    }

    verbs()
    {
        return this.verb.all();
    }

    // Substitute $ placeholders with resource name.
    substituteResource(uriString)
    {
        let res = this.resourceName;

        while(uriString.indexOf('$') !== -1)
        {
            if(res === null || res === undefined) throw new NullResourceException('This url requires a resource name.');
            uriString = uriString.replace('$', this.resourceName);
        }
        return uriString;
    }

    // Default to empty parameters.
    url(paramValues = {})
    {
        let url = this.substituteResource(this.uri);
        let params = new UrlParams(url);
        return params.bind(paramValues);
    }

    urlParameters()
    {
        return new UrlParams(this.substituteResource(this.uri));
    }
}
