import LaravelRoutes from '../src/LaravelRoutes';

describe('Settings', function() 
{
    it('has default setting for registration.strict', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.strict')).toEqual(false);
    });

    it('has default setting for registration.explicit', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.strict')).toEqual(false);
    });

    it('has default setting for logging.warnings', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.strict')).toEqual(false);
    });

    it('throw error when using when using an ambiguous route with strict setting', function()
    {
        let settings = {
            registration: {
                strict: true
            }
        };
        let routes = new LaravelRoutes(settings);
        expect(function() {
            routes.get('test').name();
        })
        .toThrow();
    });
});
