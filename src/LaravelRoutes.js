import Route from './Route';
import RouteGroup from './RouteGroup';
import InvalidRouteException from './exceptions/InvalidRouteException';

class LaravelRoutes
{
    constructor()
    {
        this.groups = {};
        this.headlessRoutes = {};
    }

    group(name)
    {
        // Lazy loading for new groups.
        if(this.groups[name] === undefined) this.groups[name] = new RouteGroup(name);
        return this.groups[name];
    }

    route(routeName)
    {
        let results = LaravelRoutes.parseName(routeName);
        if(results.type === 'headless' && this.headlessRoutes[routeName] !== undefined)
        {
            return this.headlessRoutes[routeName];
        }
        return this.group(results.group).action(results.action);
    }

    // Returns a formatted list of all 'registered' routes.
    routes()
    {
        let msg = '';
        msg += '---- Route Groups ----\n\n';
        for(let n = 0; n < this.groups.length; n++)
        {
            // Convert group to string presentation.
            msg += this.groups[n];
        }

        msg += '\n---- Headless Routes ----\n\n'
        for(let n = 0; n < this.headlessRoutes.length; n++)
        {
            // Convert group to string presentation.
            msg += this.groups[n];
        }
        return msg;
    }

    registerByActions(routes, group = null)
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
            this.register(route[0], route[1], actions[n], group);
        }
    }

    registerByNames(routes)
    {
        let actions = Object.keys(routes);
        for(let n = 0; n < actions.length; n++)
        {
            let results = LaravelRoutes.parseName(actions[n]);
            let route = routes[actions[n]];
            let verb = route[0];
            let url = route[1];
            this.register(verb, url, results.action, results.group);
        }
    }

    register(verb, uri, action, groupName = null)
    {
        // Check if group name is known.
        if(typeof groupName === 'string')
        {
            let group = this.group(groupName);
            group.add(verb, uri, action);
            this.groups[group] = group;
            return;
        }
        this.headlessRoutes[action] = new Route(verb, uri, action);
    }

    static parseName(string)
    {
        let parts = string.split('.');
        if(parts.length > 2) 
        {
            throw new InvalidRouteException('Route name syntax with more than a single dot is not supported.');
        }
        if(parts.length === 1)
        {
            return {group: null, action: parts[0], type: 'headless'};
        }
        return {group: parts[0], action: parts[1], type: 'controller'};
    }
}
