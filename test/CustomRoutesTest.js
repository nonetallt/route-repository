describe('Custom routes', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelHelpers();
                
    })

    it('should throw exception when called route does not exist', function()
    {
        var route = this.helpers.controller('test').action('destroy');
        expect(route.url(1)).toBe('/test/1');
        expect(route.verb).toBe('DELETE');
        expect(route.name).toBe('test.destroy');
        expect(route.action).toBe('destroy');
        
    });



});

//expect(true).toBe(true);
//expect(true).not.toBe(false);
