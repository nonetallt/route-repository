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
});
