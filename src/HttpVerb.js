import InvalidHttpVerbException from './exceptions/InvalidHttpVerbException';

export default class HttpVerb
{

    constructor(verbString)
    {
        // Make sure the verb is capitalized.
        verbString = verbString.toUpperCase();

        // Check if this object supports multiple verbs at once.
        if(verbString.includes('/'))
        {
            // Typecasts string to array with one element if no separator is
            // found.
            verbs = verbString.split('/');
        }
        
        HttpVerb.validate(verbs);
        this.verbs = verbs;
    }

    first()
    {
        return this.verbs[0];
    }

    all()
    {
        return this.verbs;
    }

    static valid()
    {
        return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];
    }

    static validate(verbs)
    {
        let validVerbs = HttpVerb.valid();
        verbs.forEach(verb => {
            if(!validVerbs.includes(verb))
            {
                let msgValid = `Http verb must be one of the following: ${verbs.join(', ')}.`; 
                let msgGiven = ` '${verb}' given.`;
                throw new InvalidHttpVerbException(msgValid + msgGiven);
            }
        })
    }

}
