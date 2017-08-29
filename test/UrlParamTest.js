import LaravelRoutes from '../src/LaravelRoutes';
describe('Url parameters', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelRoutes();
        this.helpers.group('test').addAll({
            custom: ['GET', '/$/{param1}/{param2}'],
            noparams: ['GET', '/$/params']
        });
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
            helpers.group('test').addAll(customRoutes);
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
            helpers.group('test').addAll(customRoutes);
            var route = helpers.group('test').route('custom');
            var url = route.url('p1');
        })
        .toThrow();
    });

    it('should work when no parameters are required', function()
    {
        // Auto generate resource route
        var route = this.helpers.group('test').route('index');
        expect(route.url()).toEqual('/test');
    });


    it('should tell if parameters are required', function()
    {
        var route = this.helpers.group('test').route('custom');
        expect(route.urlParameters().areRequired()).toEqual(true);
    });

    it('should tell if parameters are not required', function()
    {
        var route = this.helpers.group('test').route('noparams');
        expect(route.urlParameters().areRequired()).toEqual(false);
    });

    it('should return the required parameter names', function()
    {
        let route = this.helpers.group('test').route('custom');
        let params = ['param1', 'param2'];
        expect(route.urlParameters().required()).toEqual(params);
    });

    it('should throw an exception when parameters are required but none are given', function()
    {
        expect(function()
        {
            let helpers = new LaravelRoutes();
            let customRoutes = {custom: [ 'GET', '/$/{param1}/{param2}' ]};
            helpers.group('test').addAll(customRoutes);
            let route = helpers.group('test').route('custom');
            route.url();
        })
        .toThrow();
    });

});
