import NullResourceException from './exceptions/NullResourceException';
import HttpVerb from './HttpVerb';
import UrlParams from '.UrlParams';

export default class ResourceRoute
{

    constructor(verb, uri, action, resourceName)
    {
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

    static substituteResource(uriString)
    {
        // Substitute placeholders with resource name.
        if(uriString.includes('$'))
        {
            if(this.resourceName === null) throw new NullResourceException('This url requires a resource name.');
            uriString = uriString.replace('$', this.resourceName);
        }
    }

    // Default to empty parameters.
    url(paramValues = {})
    {
        let url = Route.substituteResource(this.uri);
        let params = new UrlParams(url);
        return params.bind(paramValues);
    }
}
