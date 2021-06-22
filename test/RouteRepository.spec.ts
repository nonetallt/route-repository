import RouteRepository from '../src/RouteRepository'
import RegistrationError from '../src/Error/RegistrationError'
import Route from '../src/Route'

describe('constructor', () => {

    it('initializes the object', () => {
		expect(new RouteRepository).toBeInstanceOf(RouteRepository)
    })

    it('initializes routes as empty', () => {
        const router = new RouteRepository
		expect(router.routes).toMatchObject({})
    })
})

describe('initial state', () => {

    it('doesn\'t have any routes', () => {
        const router = new RouteRepository
        expect(router.routes.size).toEqual(0);
    })

    it('doesn\'t have a route prefix', () => {
        const router = new RouteRepository
        expect(router.routePrefix).toEqual(null);
    })
})

describe('register', () => {

    it('adds new route to routes', () => {
        const router = new RouteRepository
        router.register('new_route', 'GET', '/foo')
        expect(router.routes.has('new_route')).toEqual(true)
    })

    it('throws error registering route with duplicate name when mutable is false', () => {
        const router = new RouteRepository({
            mutable: false
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('foo', 'GET', '/foo');
        }).toThrow(RegistrationError)
    })

    it('does not throw error registering route with duplicate name when mutable is true', () => {
        const router = new RouteRepository({
            mutable: true
        })

        expect(() => {
            router.register('foo', 'GET', '/foo1');
            router.register('foo', 'GET', '/foo2');
        }).not.toThrow()
    })

    it('throws error when registering route with duplicate url + method when duplicates is false', () => {
        const router = new RouteRepository({
            duplicates: false
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('bar', 'GET', '/foo');
        }).toThrow(RegistrationError)
    })

    it('does not throw error when registering route with duplicate url + method when duplicates is true', () => {
        const router = new RouteRepository({
            duplicates: true
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('bar', 'GET', '/foo');
        }).not.toThrow(RegistrationError)
    })

    it('generates a route signature', () => {
        const router = new RouteRepository({
            mutable: true
        })

        router.register('foo', 'GET', '/foo')
        router.register('foo', 'GET', '/foo/bar')

        expect(router.signatures.size).toEqual(1)
    })

    it('generates the correct route signature', () => {
        const router = new RouteRepository({
            mutable: true
        })

        router.register('foo', 'GET', '/foo')

        expect(router.signatures.has(router.routeSignature('GET', '/foo'))).toEqual(true)
    })

    it('removes old signature from signatures when an old route is updated', () => {
        const router = new RouteRepository({
            mutable: true
        })

        router.register('foo', 'GET', '/foo')
        router.register('foo', 'GET', '/foo/bar')

        expect(router.signatures.size).toEqual(1)
    })

    it('generates the correct signature when an old route is updated', () => {
        const router = new RouteRepository({
            mutable: true
        })

        router.register('foo', 'GET', '/foo')
        router.register('foo', 'GET', '/foo/bar')

        expect(router.signatures.has(router.routeSignature('GET', '/foo/bar'))).toEqual(true)
    })
})


describe('registerRoute', () => {

    it('adds new route to routes', () => {
        const router = new RouteRepository
        const route = new Route('new_route', 'GET', '/foo')
        router.registerRoute(route)
        expect(router.routes.get('new_route')).toEqual(route)
    })

    it('adds only single route', () => {
        const router = new RouteRepository
        const route = new Route('new_route', 'GET', '/foo')
        router.registerRoute(route)
        expect(router.routes.size).toEqual(1)
    })
})

describe('get', () => {

    it('adds new get route', () => {
        const router = new RouteRepository
        router.get('new_route', '/foo')
        const route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('GET')
    })
})


describe('post', () => {

    it('adds new post route', () => {
        const router = new RouteRepository
        router.post('new_route', '/foo')
        const route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('POST')
    })
})

describe('put', () => {

    it('adds new put route', () => {
        const router = new RouteRepository
        router.put('new_route', '/foo')
        const route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('PUT')
    })
})

describe('patch', () => {

    it('adds new patch route', () => {
        const router = new RouteRepository
        router.patch('new_route', '/foo')
        const route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('PATCH')
    })
})

describe('delete', () => {

    it('adds new delete route', () => {
        const router = new RouteRepository
        router.delete('new_route', '/foo')
        const route = router.routes.get('new_route') ?? {method: null};
        expect(route.method).toEqual('DELETE')
    })
})

describe('prefix', () => {

    it('adds prefix to registered routes', () => {
        const router = new RouteRepository
        const prefix = 'prefix_'
        const url = '/foo'

        router.prefix(prefix, (router: RouteRepository) => {
            router.register('new_route', 'GET', url);
        })

        const route = router.routes.get('new_route') ?? {url: {toString: function() {return null}}};
        expect(route.url.toString()).toEqual(`${prefix}${url}`);
    })

    it('does not apply prefix to routes registered after prefix', () => {
        const router = new RouteRepository({duplicates: true})
        const prefix = 'prefix_'
        const url = '/foo'

        router.prefix(prefix, (router: RouteRepository) => {
            router.register('new_route_1', 'GET', url);
        })

        router.register('new_route_2', 'GET', url)

        const route = router.routes.get('new_route_2') ?? {url: {toString: function() {return null}}};
        expect(route.url.toString()).toEqual(url);
    })

    it('removes old signatures from list when route is modified', () => {
        const router = new RouteRepository({mutable: true})
    })
})

describe('hasRouteWithName', () => {

    it('returns true when route with a given name exists', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithName('foo')).toEqual(true)
    })

    it('returns false when route with a given name does not exist', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithName('bar')).toEqual(false)
    })
})

describe('hasRouteWithUrl', () => {

    it('returns true when route with a given url exists', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo')).toEqual(true)
    })

    it('returns false when route with a given url does not exist', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/bar')).toEqual(false)
    })

    it('returns true when route with a given url and method exists', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo', 'GET')).toEqual(true)
    })

    it('returns true when route with a given url and one of the given methods exists', () => {
        const router = new RouteRepository
        router.post('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo', 'GET', 'POST')).toEqual(true)
    })

    it('returns false when route with a given url but not method exists', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/foo', 'POST')).toEqual(false)
    })

    it('returns false when route with a given method but not url exists', () => {
        const router = new RouteRepository
        router.get('foo', '/foo')
        expect(router.hasRouteWithUrl('/bar', 'GET')).toEqual(false)
    })
})
