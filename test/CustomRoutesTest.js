import LaravelRoutes from '../src/LaravelRoutes';
describe('Custom routes', function() 
{
    beforeAll(function()
    {
        this.routes = new LaravelRoutes();
    })

    it('should throw exception when called route does not exist', function()
    {
        expect(function(){
            var route = new LaravelRoutes().group('test').route('asd');
        })
        .toThrow(new Error("Route 'asd' is not registered for group 'test'."));
    });

    it('should find a registered custom route', function()
    {
        var customRoutes = {custom: ['GET', '/$/custom']}
        this.routes.group('test').addAll(customRoutes);
        var route = this.routes.group('test').route('custom');
        expect(route.url()).toBe('/test/custom');
        expect(route.verb()).toBe('GET');
    });

    it('should override an existing resource route', function()
    {
        var customRoutes = {index: ['POST', '/$/custom']}
        this.routes.group('test').addAll(customRoutes);
        var route = this.routes.group('test').route('index');
        expect(route.url()).toBe('/test/custom');
        expect(route.verb()).toBe('POST');   
    });

    it('should register a single headless route', function()
    {
        var customRoutes = {index: ['POST', '/$/custom']}
        this.routes.add('POST', '/headless', 'headless');
        var route = this.routes.route('headless');
        expect(route.url()).toBe('/headless');
        expect(route.verb()).toBe('POST');   
    });

});
