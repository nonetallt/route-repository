import RouteParser from './RouteParser';

export default class LaravelRouteBuilder
{
    constructor(verb, uri, action, format, registerMethod)
    {
        if(typeof verb !== 'string') throw new Error(`No verb specified for the new route.`);
        if(typeof uri !== 'string') throw new Error(`No uri specified for the new route.`);

        // Get the group and action from the controller string
        let r = RouteParser.parseLaravelAction(action, format);
        if(r !== null)
        {
            this.action = r.action;
            this.group = r.group;
        }
        
        this.verb = verb;
        this.uri = uri;
        this.registerMethod = registerMethod;
        this.warnings = [];
        this.preRegister();
    }

    // Registers the route with a default generated name before name is called
    preRegister()
    {
        let route = this.registerMethod(this);
    }

    // Explicitly registers the route with a given name
    name(name)
    {
        if(!this.routeHasName())
        {
            if(!this.routeHasAction()) this.warnings.push(`Cannot register an ambiguous uri '${this.uri}' with neither action nor explicit name.`);
            else this.warnings.push(`Registering uri '${this.uri}' with default name.`);
        }
        let r = RouteParser.parseName(name);
        this.action = r.action;
        this.group = r.group;

        // Register the route in LaravelRoutes
        let route = this.registerMethod(this);
        return route;
    }

    routeHasName()
    {
        return typeof name !== 'string';
    }

    routeHasAction()
    {
        return this.action === null;
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
