import Route from './Route';
import InvalidRouteException from './exceptions/InvalidRouteException';

export default class RouteGroup
{
    constructor(name, usesResources = true)
    {
        this.name = name;
        this.usesResources = usesResources;
        this.customRoutes = {};
    }

    // Return a string representation of the object.
    toString()
    {
        let str = `-- ${this.name} --\n`;
        
        // Find longest values for parsing.
        let verbL = 0;
        let uriL = 0;
        let actionL = 0;
        let nameL = 0;

        let routes = this.all();
        for(let n = 0; n < routes.length; n++)
        {
            let route = routes[n];
            let verb = route.verbs().join('/').length;
            let uri = route.uri().length;
            let action = route.action().length;
            let name = route.name().length;

            if(verb > verbL) verbL = verb;
            if(uri > uriL) uriL = uri;
            if(action > actionL) actionL = action;
            if(name > nameL) nameL = name;
        }
        return str;
    }

    // Shorthand for returning resourceful action data.
    static resource(action)
    {
        return RouteGroup.resources()[action];
    }

    // Return a list of all available resourceful actions.
    static resources()
    {
        let routes  = {
            index: [ 'GET', '/$'],
            create: [ 'GET', '/$/create'],
            store: [ 'POST', '/$'],
            show: [ 'GET', '/$/{$}'],
            edit: [ 'GET', '/$/{$}/edit'],
            update: [ 'PUT/PATCH', '/$/{$}'],
            destroy: [ 'DELETE', '/$/{$}']
        }       
        return routes;
    }

    // Creates a Route object matching the given resource action.
    resourceRoute(action)
    {
        let route = RouteGroup.resource(action);
        let verb = route[0];
        let url = route[1];
        return new Route(verb, url, action, this.name);
    }

    // Find the route matching the name(=action) of the route.
    route(name)
    {
        // Check if name is registered as a custom route.
        if(this.customRoutes[name] !== undefined) return this.customRoutes[name];

        // Check resource routes.
        if(RouteGroup.resource(name) !== undefined && this.usesResources) return this.resourceRoute(name);
            
        throw new InvalidRouteException(`Route '${name}' is not registered for group '${this.name}'.`);
    }

    // Return all 'registered' routes, including resources if applicable.
    all()
    {
        let routes = [];
        routes.concat(this.customRoutes);
        if(this.usesResources)
        {
            let actions = Object.keys(RouteGroup.resources());
            for(let n = 0; n < actions.length; n++)
            {
                routes.push(this.resourceRoute(actions[n]));
            }
        }
        return routes;
    }

    // Register a new custom route.
    add(verb, uri, action)
    {
        let route = new Route(verb, uri, action, this.name);
        this.customRoutes[action] = route;
    }

    // Remove a register custom route.
    remove(name)
    {
        delete this.customRoutes[name];
    }
}
