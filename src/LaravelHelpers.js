import Route from './Route';
import Controller from './Controller';

class LaravelHelpers
{
    constructor()
    {
        this.controllers = {};
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
            throw new InvalidRouteException('Route name should consist of resource and action names separated by a dot.');
        }

        let parts = routeName.split('.');
        let resourceName = parts[0];
        let actionName = parts[1];

        return controller(resourceName).action(actionName);
    }

    registerRoutes(resourceName, routes)
    {
        let actions = Object.keys(routes);
        let controller = this.controller(resourceName);

        for(let n = 0; n < actions.length; n++)
        {
            let route = routes[actions[n]];
            controller.addRoute(route[0], route[1], actions[n]);
            this.controllers[resourceName] = controller;
        }
    }
}
