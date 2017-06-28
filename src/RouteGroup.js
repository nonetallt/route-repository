import Route from './Route';
import InvalidRouteException from './exceptions/InvalidRouteException';
import markdownTable from './vendor/MarkdownTable';

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
        // Initialize table with headers
        let tableRows = [['VERB', 'URI', 'ACTION', 'NAME']];
        return markdownTable(tableRows.concat(this.toArray()), {align: 'l'});
    }

    // Returns an array representation of the object.
    toArray()
    {
        let tableRows = [];
        let routes = this.all();

        for(let n = 0; n < routes.length; n++)
        {
            // Prepend the group name to the row.
            let row = [this.name].concat(routes[n].toArray());

            // Append route as an array to the table rows
            tableRows.push(row);
        }
        return tableRows;
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

    // Register all routes in a given object using object keys as action names.
    addAll(routes)
    {
        let actions = Object.keys(routes);
        for(let n = 0; n < actions.length; n++)
        {
            if(actions[n].indexOf('.') !== -1)
            {
                let msgErr = 'Registered action names should not contain the dot (.) character.';
                let msgHint = 'Try registerByNames() instead';
                throw new InvalidRouteException(`${msgErr}\n${msgHint}`);
            }
            let route = routes[actions[n]];
            this.add(route[0], route[1], actions[n]);
        }
    }

    // Remove a register custom route.
    remove(name)
    {
        delete this.customRoutes[name];
    }
}
