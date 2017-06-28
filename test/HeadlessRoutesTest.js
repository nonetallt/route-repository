import LaravelRoutes from '../src/LaravelRoutes';
describe('Headless routes', function() 
{
    beforeAll(function()
    {
        this.routes = new LaravelRoutes();
        let namedRoutes = {
            login: ['GET', '/login'],
            search: ['POST', '/search/{query}'],
            'photos.search': ['GET', '/search']
        };
        this.routes.registerByNames(namedRoutes);
        //console.log('\n'+this.routes.list());
    })

    it('should add 2 headless routes', function()
    {
        expect(this.routes.countHeadless()).toEqual(2);
    });

    it('should add 1 grouped route', function()
    {
        expect(this.routes.countGrouped()).toEqual(1);
    });

    it("should have registered 'photos' group", function()
    {
        expect(this.routes.hasGroup('photos')).toEqual(true);
    });

    it('should add 1 group', function()
    {
        expect(this.routes.countGroups()).toEqual(1);
    });

    it('should add 3 routes', function()
    {
        expect(this.routes.count()).toEqual(3);
    });

});
