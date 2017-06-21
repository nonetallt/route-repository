describe('Resource routes', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelRoutes();
                
    })

    it('should return index route', function()
    {
        var route = this.helpers.controller('test').action('index');
        expect(route.url()).toBe('/test');
        expect(route.verb()).toBe('GET');
    });

    it('should return create route', function()
    {
        var route = this.helpers.controller('test').action('create');
        expect(route.url()).toBe('/test/create');
        expect(route.verb()).toBe('GET');
    });

    it('should return store route', function()
    {
        var route = this.helpers.controller('test').action('store');
        expect(route.url()).toBe('/test');
        expect(route.verb()).toBe('POST');
    });

    it('should return show route', function()
    {
        var route = this.helpers.controller('test').action('show');
        expect(route.url(1)).toBe('/test/1');
        expect(route.verb()).toBe('GET');
    });

    it('should return edit route', function()
    {
        var route = this.helpers.controller('test').action('edit');
        expect(route.url(1)).toBe('/test/1/edit');
        expect(route.verb()).toBe('GET');
    });

    it('should return update route', function()
    {
        var route = this.helpers.controller('test').action('update');
        expect(route.url(1)).toBe('/test/1');
        expect(route.verb()).toBe('PUT');
        expect(route.verbs()).toEqual(['PUT', 'PATCH']);
    });

    it('should return destroy route', function()
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
