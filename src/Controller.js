import Route from './Route';

export default class Controller
{
    constructor(resourceName)
    {
        this.resourceName = resourceName;
        this.customRoutes = [];
    }

    // When calling urls $ equals resource name
    static resources(action)
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

        let route = Controller.resources(action);
        route.push(action);
        route.push(this.resourceName);
        
        return new Route(...route);
    }

    addRoute(verb, uri, action)
    {
        this.customRoutes[action] = new Route(verb, uri, action, this.resouceName);
    }
}
