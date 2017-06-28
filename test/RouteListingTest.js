import LaravelRoutes from '../src/LaravelRoutes';
describe('Route listing', function() 
{
    beforeAll(function()
    {
        this.routes = new LaravelRoutes();
        /*
        this.routes.registerByNames({
            'test.index': ['GET', '/$'],
        });
        */
    })

    it('should return the correct amount of resource routes', function()
    {
        let group = this.routes.group('test');
        expect(group.all().length).toEqual(7);
    });

    it('should display all registered routes', function()
    {
        console.log('\n'+this.routes.routes());
    });
});
