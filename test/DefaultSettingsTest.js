import LaravelRoutes from '../src/LaravelRoutes';

describe('Default Settings', function() 
{
    it('has registration.strict', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.strict')).toEqual(false);
    });

    it('has registration.explicit', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.strict')).toEqual(false);
    });

    it('has logging.warnings', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.strict')).toEqual(false);
    });

    it('has registration.actionDefault', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.actionDefault')).toEqual('controller');
    });

});
