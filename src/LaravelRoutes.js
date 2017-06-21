import Route from './Route';
import Controller from './Controller';
import NullResourceException from './exceptions/NullResourceException';

class LaravelRoutes
{
    constructor()
    {
        this.controllers = {};
        this.headlessRoutes = {};
    }

    controller(resourceName)
    {
        if(this.controllers[resourceName] === undefined)
        {
            this.controllers[resourceName] = new Controller(resourceName);
        }
        return this.controllers[resourceName];
    }

    route(routeName)
    {
        if(!routeName.indexOf('.') !== -1)
        {
            if(this.headlessRoutes[routeName] === undefined)
            {
                let msg = `Route '${routeName} does not exist.'`;
                throw new NullResourceException(msg);
            }            
            return this.headlessRoutes[routeName];
        }
        let parts = routeName.split('.');
        let resourceName = parts[0];
        let actionName = parts[1];
        return controller(resourceName).action(actionName);
    }

    register(routes, resourceName = null)
    {
        let actions = Object.keys(routes);
        for(let n = 0; n < actions.length; n++)
        {
            let route = routes[actions[n]];
            this.registerRoute(route[0], route[1], actions[n], resourceName);
        }
    }

    registerRoute(verb, uri, action, resourceName = null)
    {
        // Check if controller (resource) name is known.
        if(typeof resourceName === 'string')
        {
            let controller = this.controller(resourceName);
            controller.addRoute(verb, uri, action);
            this.controllers[resourceName] = controller;
            return;
        }
        return this.headlessRoutes.push(new Route(verb, uri, action));
    }
}
