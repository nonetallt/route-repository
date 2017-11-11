import LaravelRoutes from '../src/LaravelRoutes';

describe('Laravel style route registration', function() 
{
    beforeAll(function()
    {
        window.Route = new LaravelRoutes();
    });

    it('should register get routes', function()
    {
        Route.get('test', 'TestController@test').name('test');
        let route = Route.route('test');
        expect(route.url()).toEqual('/test');
    });

    it('should default route name to action name', function()
    {
        Route.get('test', 'TestController@test');
        let route = Route.route('test');
        expect(route.url()).toEqual('/test');
    });

    it('should register routes with no controller action', function()
    {
        Route.get('test').name('test');
        let route = Route.route('test');
        expect(route.url()).toEqual('/test');
    });

    it('should throw an exception when action is string without the @ character', function()
    {
        expect(function () 
        {
            Route.get('test', 'TestController');
        })
        .toThrow();
    });

    it('shoud throw an exception when no uri is specified', function()
    {
        expect(function () 
        {
            Route.get();
        })
        .toThrow(new Error('No uri specified for the new route.'));
    });

    
});
