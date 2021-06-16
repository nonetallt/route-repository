import Router from '../src/Router'
import RegistrationError from '../src/Error/RegistrationError'
import Route from '../src/Route'

describe('constructor', () => {

    it('initializes the object', () => {
		expect(new Router).toBeInstanceOf(Router)
    })

    it('initializes routes as empty', () => {
        let router = new Router
		expect(router.routes).toMatchObject({})
    })
})

describe('initial state', () => {

    it('doesn\'t have any routes', () => {
        let router = new Router
        expect(router.routes.size).toEqual(0);
    })

    it('doesn\'t have a route prefix', () => {
        let router = new Router
        expect(router.routePrefix).toEqual(null);
    })
})

describe('register', () => {

    it('adds new route to routes', () => {
        let router = new Router
        router.register('new_route', 'GET', '/foo')
        expect(router.routes.has('new_route')).toEqual(true)
    })

    it('throws error registering route with duplicate name when strict is true', () => {
        let router = new Router({
            immutable: true
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('foo', 'GET', '/foo');
        }).toThrow(RegistrationError)
    })

    it('does not throw error registering route with duplicate name when strict is false', () => {
        let router = new Router({
            immutable: false
        })

        expect(() => {
            router.register('foo', 'GET', '/foo1');
            router.register('foo', 'GET', '/foo2');
        }).not.toThrow()
    })

    it('throws error when registering route with duplicate url + method when duplicates is false', () => {
        let router = new Router({
            duplicates: false
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('bar', 'GET', '/foo');
        }).toThrow(RegistrationError)
    })

    it('does not throw error when registering route with duplicate url + method when duplicates is true', () => {
        let router = new Router({
            duplicates: true
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('bar', 'GET', '/foo');
        }).not.toThrow(RegistrationError)
    })
})


describe('registerRoute', () => {

    it('adds new route to routes', () => {
        let router = new Router
        let route = new Route('new_route', 'GET', '/foo')
        router.registerRoute(route)
        expect(router.routes.get('new_route')).toEqual(route)
    })

    it('adds only single route', () => {
        let router = new Router
        let route = new Route('new_route', 'GET', '/foo')
        router.registerRoute(route)
        expect(router.routes.size).toEqual(1)
    })
})

describe('get', () => {

    it('adds new get route', () => {
        let router = new Router
        router.get('new_route', '/foo')
        let route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('GET')
    })
})


describe('post', () => {

    it('adds new post route', () => {
        let router = new Router
        router.post('new_route', '/foo')
        let route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('POST')
    })
})

describe('put', () => {

    it('adds new put route', () => {
        let router = new Router
        router.put('new_route', '/foo')
        let route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('PUT')
    })
})

describe('patch', () => {

    it('adds new patch route', () => {
        let router = new Router
        router.patch('new_route', '/foo')
        let route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('PATCH')
    })
})

describe('delete', () => {

    it('adds new delete route', () => {
        let router = new Router
        router.delete('new_route', '/foo')
        let route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('DELETE')
    })
})

describe('prefix', () => {

    it('adds prefix to registered routes', () => {
        const router = new Router
        const prefix = 'prefix_'
        const url = '/foo'

        router.prefix(prefix, (router: Router) => {
            router.register('new_route', 'GET', url);
        })

        const route = router.routes.get('new_route') ?? {url: null};
        expect(route.url).toEqual(`${prefix}${url}`);
    })

    it('does not apply prefix to routes registered after prefix', () => {
        const router = new Router({duplicates: true})
        const prefix = 'prefix_'
        const url = '/foo'

        router.prefix(prefix, (router: Router) => {
            router.register('new_route_1', 'GET', url);
        })

        router.register('new_route_2', 'GET', url)

        const route = router.routes.get('new_route_2') ?? {url: null};
        expect(route.url).toEqual(url);
    })
})

describe('hasRouteWithName', () => {

    it('returns true when route with a given name exists', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithName('foo')).toEqual(true)
    })

    it('returns false when route with a given name does not exist', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithName('bar')).toEqual(false)
    })
})

describe('hasRouteWithUrl', () => {

    it('returns true when route with a given url exists', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo')).toEqual(true)
    })

    it('returns false when route with a given url does not exist', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/bar')).toEqual(false)
    })

    it('returns true when route with a given url and method exists', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo', 'GET')).toEqual(true)
    })

    it('returns true when route with a given url and one of the given methods exists', () => {
        const router = new Router
        router.post('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo', 'GET', 'POST')).toEqual(true)
    })

    it('returns false when route with a given url but not method exists', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo', 'POST')).toEqual(false)
    })

    it('returns false when route with a given method but not url exists', () => {
        const router = new Router
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/bar', 'GET')).toEqual(false)
    })
})
