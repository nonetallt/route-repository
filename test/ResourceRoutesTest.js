describe('Resource routes', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelHelpers();
                
    })

    it('should return correct index route', function()
    {
        var route = this.helpers.controller('test').action('index');
        expect(route.url()).toBe('/test');
        expect(route.verb()).toBe('GET');
    });

    it('should return correct create route', function()
    {
        var route = this.helpers.controller('test').action('create');
        expect(route.url()).toBe('/test/create');
        expect(route.verb()).toBe('GET');
    });

    it('should return correct store route', function()
    {
        var route = this.helpers.controller('test').action('store');
        expect(route.url()).toBe('/test');
        expect(route.verb()).toBe('POST');
    });

    it('should return correct show route', function()
    {
        var route = this.helpers.controller('test').action('show');
        expect(route.url(1)).toBe('/test/1');
        expect(route.verb()).toBe('GET');
    });

    it('should return correct edit route', function()
    {
        var route = this.helpers.controller('test').action('edit');
        expect(route.url(1)).toBe('/test/1/edit');
        expect(route.verb()).toBe('GET');
    });

    it('should return correct update route', function()
    {
        var route = this.helpers.controller('test').action('update');
        expect(route.url(1)).toBe('/test/1');
        expect(route.verb()).toBe('PUT/PATCH');
    });

    it('should return correct destroy route', function()
    {
        var route = this.helpers.controller('test').action('destroy');
        expect(route.url(1)).toBe('/test/1');
        expect(route.verb()).toBe('DELETE');
        expect(route.name).toBe('test.destroy');
        expect(route.action).toBe('destroy');
        
    });



});

//expect(true).toBe(true);
//expect(true).not.toBe(false);
