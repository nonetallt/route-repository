import RouteRepository from '../src/RouteRepository'
import RouteRegistrar from '../src/RouteRegistrar'
import RegistrationError from '../src/error/RegistrationError'
import Route from '../src/Route'
import fs from 'fs'

describe('RouteRepository', () => {

    describe('countRoutes', () => {

        it('doesn\'t have any routes initially', () => {
            const router = new RouteRepository
            expect(router.countRoutes()).toEqual(0);
        })

        it('increases route count to match number of routes', () => {
            const router = new RouteRepository
            router.register('new_route_1', 'GET', '/foo')
            router.register('new_route_2', 'GET', '/bar')
            router.register('new_route_3', 'GET', '/baz')
            expect(router.countRoutes()).toEqual(3);
        })
    })

    describe('register', () => {

        it('adds new route to routes', () => {
            const router = new RouteRepository
            router.register('new_route', 'GET', '/foo')
            expect(router.hasRouteWithName('new_route')).toEqual(true)
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

        it('generates a route signature for a new route', () => {
            const router = new RouteRepository({
                mutable: true
            })

            router.register('foo', 'GET', '/foo')
            expect(router.hasRouteWithUrl('/foo', 'GET')).toEqual(true)
        })

        it('generates a route signature for the newest version of route', () => {
            const router = new RouteRepository({
                mutable: true
            })

            router.register('foo', 'GET', '/foo')
            router.register('foo', 'GET', '/foo/bar')

            expect(router.hasRouteWithUrl('/foo/bar', 'GET')).toEqual(true)
        })

        it('removes the old route signature of the modified route', () => {
            const router = new RouteRepository({
                mutable: true
            })

            router.register('foo', 'GET', '/foo')
            router.register('foo', 'GET', '/foo/bar')

            expect(router.hasRouteWithUrl('/foo', 'GET')).toEqual(false)
        })
    })

    describe('get', () => {

        it('adds new get route', () => {
            const router = new RouteRepository
            router.get('new_route', '/foo')
            const route = router.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('GET')
        })
    })


    describe('post', () => {

        it('adds new post route', () => {
            const router = new RouteRepository
            router.post('new_route', '/foo')
            const route = router.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('POST')
        })
    })

    describe('put', () => {

        it('adds new put route', () => {
            const router = new RouteRepository
            router.put('new_route', '/foo')
            const route = router.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('PUT')
        })
    })

    describe('patch', () => {

        it('adds new patch route', () => {
            const router = new RouteRepository
            router.patch('new_route', '/foo')
            const route = router.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('PATCH')
        })
    })

    describe('delete', () => {

        it('adds new delete route', () => {
            const router = new RouteRepository
            router.delete('new_route', '/foo')
            const route = router.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('DELETE')
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

    describe('group', () => {

        describe('extra', () => {

            it('sets extra for registered routes', () => {
                const router = new RouteRepository
                const extra = {test: 1}

                router.group({extra: extra}, (registrar) => {
                    registrar.register('test1', 'GET', '/bar')
                })

                const route = router.getRoute('test1') ?? {extra: null}
                expect(route.extra).toEqual(extra)
            })
        })

        describe('baseUri', () => {

            it('adds baseUri to registered routes', () => {
                const router = new RouteRepository
                const baseUri = '/prefix_'
                const url = '/foo'

                router.group({baseUri: baseUri}, (router: RouteRegistrar) => {
                    router.register('new_route', 'GET', url);
                })

                const route = router.getRoute('new_route') ?? {url: {toString: function() {return null}}};
                expect(route.url.toString()).toEqual(`${baseUri}${url}`);
            })

            it('does not apply baseUri to routes registered after baseUri', () => {
                const router = new RouteRepository({duplicates: true})
                const baseUri = 'prefix_'
                const url = '/foo'

                router.group({baseUri: baseUri}, (router: RouteRegistrar) => {
                    router.register('new_route_1', 'GET', url);
                })

                router.register('new_route_2', 'GET', url)

                const route = router.getRoute('new_route_2') ?? {url: {toString: function() {return null}}};
                expect(route.url.toString()).toEqual(url);
            })

            it('removes old signatures from list when route is modified', () => {
                const router = new RouteRepository({mutable: true})
            })
        })
    })

    describe('listRoutes', () => {

        it('should return a markdown table string', () => {
            const router = new RouteRepository()
            router.get('photos', '/photos')
            router.get('albums', '/albums')
            router.post('collections', '/collections')
            router.post('tags', '/tags')

            const path = __dirname + '/input/route_table.md'
            let table = fs.readFileSync(path, 'utf8').toString()

            // Table string should be trimmed because POSIX compliant editors add trailing \n to the end of the file
            if(table.slice(-1) === "\n") {
                table = table.slice(0, -1)
            }

            expect(router.listRoutes()).toEqual(table)
        })
    })
})
