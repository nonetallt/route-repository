import LaravelRoutes from '../src/LaravelRoutes';
describe('Route listing', function() 
{
    beforeAll(function()
    {
        this.routes = new LaravelRoutes();
    })

    it('should return registered resource routes', function()
    {
        let group = this.routes.group('enabledResources');
        expect(group.all().length).toEqual(7);
    });

    it('should not return resource routes when the option is disabled', function()
    {
        let group = this.routes.group('disabledResources', false);
        expect(group.all().length).toEqual(0);
    });

    it('should not return resource routes when the option is changed to disabled', function()
    {
        let groupName = 'changeToDisabled';

        let group = this.routes.group(groupName);
        expect(group.all().length).toEqual(7);

        group = this.routes.group(groupName, false);
        expect(group.all().length).toEqual(0);
    });

    it('should display all registered routes', function()
    {
        let routes = new LaravelRoutes();
        routes.group('test');

        let resources = `| GROUP | VERB      | URI               | ACTION  | NAME         |
| :---- | :-------- | :---------------- | :------ | :----------- |
| test  | GET       | /test             | index   | test.index   |
| test  | GET       | /test/create      | create  | test.create  |
| test  | POST      | /test             | store   | test.store   |
| test  | GET       | /test/{test}      | show    | test.show    |
| test  | GET       | /test/{test}/edit | edit    | test.edit    |
| test  | PUT/PATCH | /test/{test}      | update  | test.update  |
| test  | DELETE    | /test/{test}      | destroy | test.destroy |`;

        expect(routes.list()).toEqual(resources);
    });
});
