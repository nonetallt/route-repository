import Route from './Route';
import RouteGroup from './RouteGroup';
import markdownTable from './vendor/MarkdownTable';
import InvalidRouteException from './exceptions/InvalidRouteException';

export default class LaravelRoutes
{
    constructor()
    {
        this.groups = {};
        this.headlessRoutes = {};
    }

    // Get an existing route group or create a new group if the specified group
    // does not exist.
    group(name, usesResources)
    {
        if(!this.hasGroup(name)) this.groups[name] = new RouteGroup(name, usesResources);
        
        // Change existing group's usesResources value.
        if(usesResources !== undefined) this.groups[name].usesResources = usesResources;
        return this.groups[name];
    }

    setGroup(name, group)
    {
        this.groups[name] = group;
    }

    // Returns a Route object with the given name.
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
    list()
    {
        // Initialize table with headers
        let tableRows = [['GROUP', 'VERB', 'URI', 'ACTION', 'NAME']];
        let groupKeys = Object.keys(this.groups);

        for(let n = 0; n < groupKeys.length; n++)
        {
            let group = this.groups[groupKeys[n]];
            // Append the group data to rows.
            tableRows = tableRows.concat(group.toArray());
        }

        let headlessKeys = Object.keys(this.headlessRoutes);
        for(let n = 0; n < headlessKeys.length; n++)
        {
            // Prepend the empty cell for the group to row.
            let row = [];
            row.push([''].concat(this.headlessRoutes[headlessKeys[n]].toArray()));
            tableRows = tableRows.concat(row);
        }
        return markdownTable(tableRows, {align: 'l'});
    }

    // Register a single route.
    register(verb, uri, action, groupName = null)
    {
        // Check if group name is known.
        if(typeof groupName === 'string') 
        {
            // Register a new group without resource routes by default.
            let group = this.group(groupName, false);
            let route = group.add(verb, uri, action);
            this.setGroup(groupName, group);
            return route;
        }
        this.headlessRoutes[action] = new Route(verb, uri, action);
        return this.headlessRoutes[action];
    }

    // Registers any routes in the given objects by using the object keys as
    // route names.
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

    // Checks that a given route name is valid and returns an object containing
    // the parsed data.
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

    count()
    {
        return this.countHeadless() + this.countGrouped();
    }

    countHeadless()
    {
        return Object.keys(this.headlessRoutes).length;
    }

    countGrouped()
    {
        let groupNames = Object.keys(this.groups);
        let routeCount = 0;
        for(let n = 0; n < groupNames.length; n++)
        {
            let group = this.groups[groupNames[n]];
            // Add all routes for this group.
            routeCount += group.all().length;
        }
        return routeCount;
    }

    countGroups()
    {
        return Object.keys(this.groups).length;
    }

    hasGroup(name)
    {
        if(this.groups[name] === undefined) return false;
        return true;
    }
}
