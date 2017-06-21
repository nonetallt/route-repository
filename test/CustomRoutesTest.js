describe('Custom routes', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelHelpers();
    })

    it('should throw exception when called route does not exist', function()
    {
        expect(function(){
            var route = new LaravelHelpers().controller('test').action('asd');
        })
        .toThrow(new Error("Route 'test.asd' does not exist."));
    });

    it('should find a registered custom route', function()
    {
        var customRoutes = {custom: ['GET', '/$/custom']}
        this.helpers.registerRoutes('test', customRoutes);
        var route = this.helpers.controller('test').action('custom');
        expect(route.url()).toBe('/test/custom');
        expect(route.verb()).toBe('GET');
    });

    it('should override an existing resource route', function()
    {
        var customRoutes = {index: ['POST', '/$/custom']}
        this.helpers.registerRoutes('test', customRoutes);
        var route = this.helpers.controller('test').action('index');
        expect(route.url()).toBe('/test/custom');
        expect(route.verb()).toBe('POST');   
    });


});
