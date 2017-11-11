export default class RouteBuilder
{
    constructor(verb, uri, action, registerMethod)
    {
        if(typeof verb !== 'string') throw new Error(`No verb specified for the new route.`);
        if(typeof uri !== 'string') throw new Error(`No uri specified for the new route.`);
        this.action = this.parseAction(action);
        this.verb = verb;
        this.uri = uri;
        this.registerMethod = registerMethod;
        
        this.warnings = [];
    }

    parseAction(action)
    {
        if(typeof action !== 'string') return null;
         
        // Malformed if action does not contain the @ symbol
        if(action.indexOf('@') === -1) throw new Error(`Action '${action}' for new uri '${uri}' is malformed. The string should contain the @ character, for example: Controller@action`);

        // Select the last part of the string delimited by @
        let parts = action.split('@');
        return parts[parts.length - 1];
    }

    name(name)
    {
        if(typeof name !== 'string')
        {
            if(this.action === null) this.warnings.push(`Cannot register an ambiguous uri '${this.uri}' with neither action nor explicit name.`);
            else this.warnings.push(`Registering uri '${this.uri}' with default name.`);
        }
        this.action = name;

        // Register the route in LaravelRoutes
        let route = this.registerMethod(this);
        return route;
    }

    hasWarnings()
    {
        return this.warnings.length > 0;
    }

    printWarnings()
    {
        for(let n = 0; n < this.warnings.length; n++)
        {
            let warning = this.warnings[n];
            console.warn(warning);
        }
    }
}
