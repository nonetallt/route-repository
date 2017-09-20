import LaravelRoutes from '../src/LaravelRoutes';
describe('Get parameters', function() 
{
    beforeAll(function()
    {
        this.routes = new LaravelRoutes();
        this.routes.addAll({
            'get.noparams': ['GET', '/test'],
            'get.params': ['GET', '/test/{param1}/{param2}'],
            'post.noparams': ['POST', '/test']
        });
    });

    it('should not append extra params when route verb is not GET', function() 
    {
        let route = this.routes.route('post.noparams');
        let params = {test: 1};
        expect(route.url(params)).toEqual('/test');
    });

    it('should append a single parameter to the url', function() 
    {
        let route = this.routes.route('get.noparams');
        let params = {test: 1};
        expect(route.url(params)).toEqual('/test?test=1');
    });

    it('should append multiple parameters to the url', function() 
    {
        let route = this.routes.route('get.noparams');
        let params = {foo: 1, bar: 2};
        expect(route.url(params)).toEqual('/test?foo=1&bar=2');
    });

    it('should append extra parameters after main url', function() 
    {
        let route = this.routes.route('get.params');
        let params = {param1: 1, param2: 2, foo: 1, bar: 2};
        expect(route.url(params)).toEqual('/test/1/2?foo=1&bar=2');
    });

    it('should only try binding named parameters', function() 
    {
        let route = this.routes.route('get.params');
        let params = [1,2,3];
        expect(route.url(params)).toEqual('/test/1/2');
    });


});
