import Route from '../src/Route'
import UriComponent from '../src/UriComponent'

describe('Route', () => {

    describe('constructor', () => {

        it('initializes the object', () => {

            const route: Route = new Route('test', 'GET', '/foo')
            expect(route).toBeInstanceOf(Route)
        })
    })

    describe('initial state', () => {

        it('uri is the one given to constructor', () => {

            const uri = '/foo'
            const route = new Route('test', 'GET', uri)
            expect(route.uri.toString()).toEqual(uri)
        })
    })

    describe('withName', () => {

        it('returns a new route instance with the given name', () => {
            const route = new Route('test', 'GET', '/foo')
            expect(route.withName('foo').name).toEqual('foo')
        })

        it('does not mutate the original route instance', () => {
            const route = new Route('test', 'GET', '/foo')
            route.withName('foo')

            expect(route.name).toEqual('test')
        })
    })

    describe('withMethod', () => {

        it('returns a new route instance with the given method', () => {
            const route = new Route('test', 'GET', '/foo')
            expect(route.withMethod('POST').method).toEqual('POST')
        })

        it('does not mutate the original route instance', () => {
            const route = new Route('test', 'GET', '/foo')
            route.withMethod('POST')

            expect(route.method).toEqual('GET')
        })
    })

    describe('withUri', () => {

        it('returns a new route instance with the given uri', () => {
            const route = new Route('test', 'GET', '/foo')
            expect(route.withUri('/bar').uri.toString()).toEqual('/bar')
        })

        it('does not mutate the original route instance', () => {
            const route = new Route('test', 'GET', '/foo')
            route.withUri('/bar')

            expect(route.uri.toString()).toEqual('/foo')
        })
    })

    describe('withUriComponent', () => {

        it('returns a new route instance with the given uri component', () => {
            const route = new Route('test', 'GET', '/foo')
            expect(route.withUriComponent(UriComponent.Path, 'bar').uri.getComponent(UriComponent.Path)).toEqual('bar')
        })

        it('does not mutate the original route instance', () => {
            const route = new Route('test', 'GET', '/foo')
            route.withUriComponent(UriComponent.Path, 'bar')

            expect(route.uri.getComponent(UriComponent.Path)).toEqual('foo')
        })
    })

    describe('withExtra', () => {

        it('returns a new route instance with the given extra', () => {
            const route = new Route('test', 'GET', '/foo', {})
            expect(route.withExtra({foo: 'bar'}).extra).toEqual({foo: 'bar'})
        })

        it('does not mutate the original route instance', () => {
            const route = new Route('test', 'GET', '/foo')
            route.withExtra({foo: 'bar'})

            expect(route.extra).toEqual({})
        })
    })
})
