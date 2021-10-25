import RouteRepository from '../src/RouteRepository'
import RouteInterface from '../src/contract/RouteInterface'
import RegistrationError from '../src/error/RegistrationError'
import fs from 'fs'
import json from './input/routes.json'
import UriComponent from '../src/UriComponent'

describe('RouteRepository', () => {

    describe('countRoutes', () => {

        it('doesn\'t have any routes initially', () => {
            const repo = new RouteRepository
            expect(repo.countRoutes()).toEqual(0);
        })

        it('increases route count to match number of routes', () => {
            const repo = new RouteRepository
            repo.register('new_route_1', 'GET', '/foo')
            repo.register('new_route_2', 'GET', '/bar')
            repo.register('new_route_3', 'GET', '/baz')
            expect(repo.countRoutes()).toEqual(3);
        })
    })

    describe('register', () => {

        it('adds new route to routes', () => {
            const repo = new RouteRepository
            repo.register('new_route', 'GET', '/foo')
            expect(repo.hasRouteWithName('new_route')).toEqual(true)
        })

        it('generates a route signature for a new route', () => {
            const repo = new RouteRepository({
                mutable: true
            })

            repo.register('foo', 'GET', '/foo')
            expect(repo.hasRouteWithUri('/foo', 'GET')).toEqual(true)
        })

        it('generates a route signature for the newest version of route', () => {
            const repo = new RouteRepository({
                mutable: true
            })

            repo.register('foo', 'GET', '/foo')
            repo.register('foo', 'GET', '/foo/bar')

            expect(repo.hasRouteWithUri('/foo/bar', 'GET')).toEqual(true)
        })

        it('removes the old route signature of the modified route', () => {
            const repo = new RouteRepository({
                mutable: true
            })

            repo.register('foo', 'GET', '/foo')
            repo.register('foo', 'GET', '/foo/bar')

            expect(repo.hasRouteWithUri('/foo', 'GET')).toEqual(false)
        })
    })

    describe('get', () => {

        it('adds new get route', () => {
            const repo = new RouteRepository
            repo.get('new_route', '/foo')
            const route = repo.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('GET')
        })
    })


    describe('post', () => {

        it('adds new post route', () => {
            const repo = new RouteRepository
            repo.post('new_route', '/foo')
            const route = repo.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('POST')
        })
    })

    describe('put', () => {

        it('adds new put route', () => {
            const repo = new RouteRepository
            repo.put('new_route', '/foo')
            const route = repo.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('PUT')
        })
    })

    describe('patch', () => {

        it('adds new patch route', () => {
            const repo = new RouteRepository
            repo.patch('new_route', '/foo')
            const route = repo.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('PATCH')
        })
    })

    describe('delete', () => {

        it('adds new delete route', () => {
            const repo = new RouteRepository
            repo.delete('new_route', '/foo')
            const route = repo.getRoute('new_route') ?? {method: null};
            expect(route.method).toEqual('DELETE')
        })
    })

    describe('hasRouteWithName', () => {

        it('returns true when route with a given name exists', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithName('foo')).toEqual(true)
        })

        it('returns false when route with a given name does not exist', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithName('bar')).toEqual(false)
        })
    })

    describe('hasRouteWithUri', () => {

        it('returns true when route with a given uri exists', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithUri('/foo')).toEqual(true)
        })

        it('returns false when route with a given uri does not exist', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithUri('/bar')).toEqual(false)
        })

        it('returns true when route with a given uri and method exists', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithUri('/foo', 'GET')).toEqual(true)
        })

        it('returns true when route with a given uri and one of the given methods exists', () => {
            const repo = new RouteRepository
            repo.post('foo', '/foo')
            expect(repo.hasRouteWithUri('/foo', 'GET', 'POST')).toEqual(true)
        })

        it('returns false when route with a given uri but not method exists', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithUri('/foo', 'POST')).toEqual(false)
        })

        it('returns false when route with a given method but not uri exists', () => {
            const repo = new RouteRepository
            repo.get('foo', '/foo')
            expect(repo.hasRouteWithUri('/bar', 'GET')).toEqual(false)
        })
    })

    describe('group', () => {

        describe('extra', () => {

            it('sets extra for registered routes', () => {
                const repo = new RouteRepository
                const extra = {test: 1}

                repo.group({extra: extra}, (registrar) => {
                    registrar.register('test1', 'GET', '/bar')
                })

                const route = repo.getRoute('test1') ?? {extra: null}
                expect(route.extra).toEqual(extra)
            })
        })

        describe('baseUri', () => {

            it('adds baseUri to registered routes', () => {
                const repo = new RouteRepository
                const baseUri = '/prefix_'
                const uri = '/foo'

                repo.group({uris: {baseUri: baseUri}}, (registrar) => {
                    registrar.register('new_route', 'GET', uri);
                })

                const route = repo.getRoute('new_route') ?? {uri: {toString: function() {return null}}};
                expect(route.uri.toString()).toEqual(`${baseUri}${uri}`);
            })

            it('does not apply baseUri to routes registered after baseUri', () => {
                const repo = new RouteRepository({duplicates: true})
                const baseUri = 'prefix_'
                const uri = '/foo'

                repo.group({uris: {baseUri: baseUri}}, (registrar) => {
                    registrar.register('new_route_1', 'GET', uri);
                })

                repo.register('new_route_2', 'GET', uri)

                const route = repo.getRoute('new_route_2') ?? {uri: {toString: function() {return null}}};
                expect(route.uri.toString()).toEqual(uri);
            })
        })
    })

    describe('listRoutes', () => {

        it('should return a markdown table string', () => {
            const repo = new RouteRepository()
            repo.get('photos', '/photos')
            repo.get('albums', '/albums')
            repo.post('collections', '/collections')
            repo.post('tags', '/tags')

            const path = __dirname + '/input/route_table.md'
            let table = fs.readFileSync(path, 'utf8').toString()

            // Table string should be trimmed because POSIX compliant editors add trailing \n to the end of the file
            if(table.slice(-1) === "\n") {
                table = table.slice(0, -1)
            }

            expect(repo.listRoutes()).toEqual(table)
        })
    })

    describe('registerAll', () => {

        it('registers all routes in the provided schema', () => {
            const repo = new RouteRepository()
            repo.registerAll([
                {
                    name: 'foo',
                    method: 'GET',
                    uri: '/foo'
                },
                {
                    name: 'bar',
                    method: 'POST',
                    uri: '/bar'
                },
                {
                    name: 'baz',
                    method: 'PUT',
                    uri: '/baz',
                    extra: {foo: 'bar'}
                }
            ])

            expect(repo.getRoute('foo')?.uri.toString()).toEqual('/foo')
            expect(repo.getRoute('foo')?.method).toEqual('GET')
            expect(repo.getRoute('bar')?.uri.toString()).toEqual('/bar')
            expect(repo.getRoute('bar')?.method).toEqual('POST')
            expect(repo.getRoute('baz')?.uri.toString()).toEqual('/baz')
            expect(repo.getRoute('baz')?.method).toEqual('PUT')
            expect(repo.getRoute('baz')?.extra).toEqual({foo: 'bar'})
        })

        it('can construct uris from uri components instead of strings', () => {

            const repo = new RouteRepository()
            repo.registerAll([
                {
                    name: 'foo',
                    method: 'GET',
                    uri: {
                        host: 'example.com',
                        path: 'foo',
                    }
                },
                {
                    name: 'bar',
                    method: 'POST',
                    uri: {
                        host: 'example.com',
                        path: 'bar',
                    }
                },
                {
                    name: 'baz',
                    method: 'PUT',
                    uri: {
                        host: 'example.com',
                        path: 'baz',
                    },
                    extra: {foo: 'bar'}
                }
            ])

            expect(repo.getRoute('foo')?.uri.toString()).toEqual('example.com/foo')
            expect(repo.getRoute('foo')?.method).toEqual('GET')
            expect(repo.getRoute('bar')?.uri.toString()).toEqual('example.com/bar')
            expect(repo.getRoute('bar')?.method).toEqual('POST')
            expect(repo.getRoute('baz')?.uri.toString()).toEqual('example.com/baz')
            expect(repo.getRoute('baz')?.method).toEqual('PUT')
            expect(repo.getRoute('baz')?.extra).toEqual({foo: 'bar'})
        })

        it('registers all routes in the provided json schema', () => {

            const repo = new RouteRepository()
            const data = json as Array<RouteInterface>
            repo.registerAll(data)

            expect(repo.getRoute('foo')?.uri.toString()).toEqual('example.com/foo')
            expect(repo.getRoute('foo')?.method).toEqual('GET')
            expect(repo.getRoute('bar')?.uri.toString()).toEqual('example.com/bar')
            expect(repo.getRoute('bar')?.method).toEqual('POST')
            expect(repo.getRoute('baz')?.uri.toString()).toEqual('example.com/baz')
            expect(repo.getRoute('baz')?.method).toEqual('PUT')
            expect(repo.getRoute('baz')?.extra).toEqual({foo: 'bar'})
        })

        it('throws RegistrationError if json cannot be parsed', () => {
            const repo = new RouteRepository()

            expect(() => {
                repo.registerAll('"foo":"bar"}')
            }).toThrow(RegistrationError)
        })

        it('can register uris from a given json string', () => {

            const repo = new RouteRepository()
            const data = JSON.stringify(json)
            repo.registerAll(data)

            expect(repo.getRoute('foo')?.uri.toString()).toEqual('example.com/foo')
            expect(repo.getRoute('foo')?.method).toEqual('GET')
            expect(repo.getRoute('bar')?.uri.toString()).toEqual('example.com/bar')
            expect(repo.getRoute('bar')?.method).toEqual('POST')
            expect(repo.getRoute('baz')?.uri.toString()).toEqual('example.com/baz')
            expect(repo.getRoute('baz')?.method).toEqual('PUT')
            expect(repo.getRoute('baz')?.extra).toEqual({foo: 'bar'})
        })
    })

    describe('configuration', () => {

        describe('mutable', () => {

            it('throws error registering route with duplicate name when mutable is false', () => {
                const repo = new RouteRepository({
                    mutable: false
                })

                expect(() => {
                    repo.register('foo', 'GET', '/foo');
                    repo.register('foo', 'GET', '/foo');
                }).toThrow(RegistrationError)
            })

            it('does not throw error registering route with duplicate name when mutable is true', () => {
                const repo = new RouteRepository({
                    mutable: true
                })

                expect(() => {
                    repo.register('foo', 'GET', '/foo1');
                    repo.register('foo', 'GET', '/foo2');
                }).not.toThrow()
            })
        })

        describe('duplicates', () => {

            it('throws error when registering route with duplicate uri + method when duplicates is false', () => {
                const repo = new RouteRepository({
                    duplicates: false
                })

                expect(() => {
                    repo.register('foo', 'GET', '/foo');
                    repo.register('bar', 'GET', '/foo');
                }).toThrow(RegistrationError)
            })

            it('does not throw error when registering route with duplicate uri + method when duplicates is true', () => {
                const repo = new RouteRepository({
                    duplicates: true
                })

                expect(() => {
                    repo.register('foo', 'GET', '/foo');
                    repo.register('bar', 'GET', '/foo');
                }).not.toThrow(RegistrationError)
            })
        })

        describe('registrationMiddleware', () => {

            it('applies each middleware before route is registered', () => {
                const repo = new RouteRepository({
                    registrationMiddleware: [
                        {applyMiddleware: (route) => route.withUriComponent(UriComponent.Scheme, 'https')},
                        {applyMiddleware: (route) => route.withUriComponent(UriComponent.Path, `prefix/${route.uri.path}`)}
                    ]
                })

                repo.register('test', 'GET', 'http://example.com/foo')
                expect(repo.getRoute('test')?.name).toEqual('test')
                expect(repo.getRoute('test')?.method).toEqual('GET')
                expect(repo.getRoute('test')?.uri.toString()).toEqual('https://example.com/prefix/foo')
            })
        })
    })
})
