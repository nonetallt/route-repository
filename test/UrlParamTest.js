describe('Url parameters', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelRoutes();
        this.helpers.registerByActions({custom: ['GET', '/$/{param1}/{param2}']}, 'test');
    })

    it('should parse single names', function()
    {
        var route = this.helpers.group('test').route('destroy');
        var params = route.urlParameters().names;
        expect(params).toEqual(['test']);
    });

    it('should parse single placeholders', function()
    {
        var route = this.helpers.group('test').route('destroy');
        var params = route.urlParameters().placeholders;
        var arr = ['{test}'];
        expect(params[0]).toEqual(arr[0]);
    });

    it('should parse multiple names', function()
    {
        var route = this.helpers.group('test').route('custom');
        var params = route.urlParameters().names;
        expect(params).toEqual(['param1', 'param2']);
    });

    it('should parse multiple placeholders', function()
    {
        var route = this.helpers.group('test').route('custom');
        var params = route.urlParameters().placeholders;
        expect(params).toEqual(['{param1}', '{param2}']);
    });

    it('should bind keyed parameters', function()
    {
        var route = this.helpers.group('test').route('custom');
        var params = {param2: 2, param1: 'p1'};
        expect(route.url(params)).toEqual('/test/p1/2');
    });

    it('should bind array of parameters', function()
    {
        var route = this.helpers.group('test').route('custom');
        var params = ['p1', 'p2'];
        expect(route.url(params)).toEqual('/test/p1/p2');
    });

    it('should bind a single parameter', function()
    {
        var route = this.helpers.group('test').route('destroy');
        expect(route.url('p1')).toEqual('/test/p1');
    });

    it('should throw exception when parameters are required but not given', function()
    { 
        expect(function(){
            var helpers = new LaravelRoutes();
            var customRoutes = {custom: [ 'GET', '/$/{param1}/{param2}' ]};
            helpers.registerByActions(customRoutes, 'test');
            var route = helpers.group('test').route('custom');
            var url = route.url();
            console.log(url);
        })
        .toThrow();
    });

    it('should throw exception when not enough parameters are given', function()
    {
        expect(function(){
            var helpers = new LaravelRoutes();
            var customRoutes = {custom: [ 'GET', '/$/{param1}/{param2}' ]};
            helpers.registerByActions(customRoutes, 'test');
            var route = helpers.group('test').route('custom');
            var url = route.url('p1');
        })
        .toThrow();
    });

    it('should work when no parameters are required', function()
    {
        var route = this.helpers.group('test').route('index');
        expect(route.url()).toEqual('/test');
    });
});