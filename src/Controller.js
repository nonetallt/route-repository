import Route from './Route';
import NullResourceException from './exceptions/NullResourceException';

export default class Controller
{
    constructor(resourceName)
    {
        this.resourceName = resourceName;
        this.customRoutes = [];
    }

    // When calling urls $ equals resource name
    static resource(action)
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
        return routes[action];
    }

    action(action)
    {
        // Check if route is registered as a custom route.
        if(this.customRoutes[action] !== undefined)
        {
            return this.customRoutes[action];
        }

        // Check resource routes.
        if(Controller.resource(action) !== undefined)
        {
            // Add action and resource name for route constructor.
            let route = Controller.resource(action);
            route.push(action);
            route.push(this.resourceName);
            return new Route(...route);
        }
        throw new NullResourceException(`Route '${this.resourceName}.${action}' does not exist.`);
    }

    addRoute(verb, uri, action)
    {
        this.customRoutes[action] = new Route(verb, uri, action, this.resouceName);
    }
}
