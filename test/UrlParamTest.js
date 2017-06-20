describe('Url parameters', function() 
{
    beforeAll(function()
    {
        this.helpers = new LaravelHelpers();
    })

    it('should parse correct single names', function()
    {
        var route = this.helpers.controller('test').action('destroy');
        var params = route.urlParameters().names;
        //console.log(params);
        expect(params).toEqual(['test']);
    });

    it('should parse correct single placeholders', function()
    {
        var route = this.helpers.controller('test').action('destroy');
        var params = route.urlParameters().placeholders;
        console.log(params);
        expect(params).toEqual(['\{test\}']);
    });

});


