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

}


