import LaravelRoutes from '../src/LaravelRoutes';

describe('Settings', function() 
{
    it('registers laravel route in controller format', function()
    {
        let routes = new LaravelRoutes();
        expect(routes.settings.default('registration.actionDefault')).toEqual('controller');
    });

    it('registers laravel route in object format', function()
    {
        let settings = {
            registration: {
                actionDefault: 'object'
            }
        }
        let routes = new LaravelRoutes(settings);
        routes.get('test', 'PhotoController@save');
        let route = routes.route('photo.save');
        expect(route.url()).toEqual('/test');
    });

    it('registers laravel route in snake format', function()
    {
        let settings = {
            registration: {
                actionDefault: 'object_snake'
            }
        }
        let routes = new LaravelRoutes(settings);
        routes.get('test', 'BounceMessageController@save');
        let route = routes.route('bounce_message.save');
        expect(route.url()).toEqual('/test');
    });

    it('registers laravel route in kebab format', function()
    {
        let settings = {
            registration: {
                actionDefault: 'object_kebab'
            }
        }
        let routes = new LaravelRoutes(settings);
        routes.get('test', 'BounceMessageController@save');
        let route = routes.route('bounce-message.save');
        expect(route.url()).toEqual('/test');
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
