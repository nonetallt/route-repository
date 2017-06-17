import InvalidHttpVerbException from './exceptions/InvalidHttpVerbException';
import NullResourceException from './exceptions/NullResourceException';

export default class ResourceRoute
{

    constructor(verb, uri, action, resourceName, resourceId = null)
    {
        this.verb = verb.toUpperCase() ;
        this.uri = uri;
        this.action = action;
        this.name =  `${resourceName}.${action}`;
        this.resourceName = resourceName;
        this.resourceId = resourceId;

        let verbs = ['GET', 'POST', 'PUT/PATCH', 'DELETE'];

        if(verbs.indexOf(this.verb) === -1)
        {
            let accepted = verbs.join(', ');
            throw new InvalidHttpVerbException('Http verb must be one of the following: ' + accepted + '.');
        }

        
    }

    // Default to object property if none are given.
    url(resourceId = this.resourceId)
    {
        let url = this.uri;

        if(url.indexOf('#') !== -1)
        {
            if(resourceId === null) throw new NullResourceException('This url requires a resource id.');
            url = url.replace('#', resourceId);

        }
        
        if(url.indexOf('$') !== -1)
        {
            if(this.resourceName === null) throw new NullResourceException('This url requires a resource name.');
            url = url.replace('$', this.resourceName);

        }
        
        return url;
    }


}
