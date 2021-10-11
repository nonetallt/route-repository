import Route from '../src/Route'

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
})
