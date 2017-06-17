class ResourceRoute
{

    constructor(verb, uri, action, name)
    {
        this.verb = verb.toUpperCase();
        this.uri = uri;
        this.action = action;
        this.name = name;

        let verbs = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

        if(verbs.indexOf(this.verb) === false)
        {
            let accepted = verbs.join(', ');
            throw new InvalidHttpVerbException('Http verb must be one of the following: ' + accepted + '.');
        }
    }
}
