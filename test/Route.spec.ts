import Route from '../src/Route'

describe('Route', () => {

    describe('constructor', () => {

        it('initializes the object', () => {

            const route: Route = new Route('test', 'GET', '/foo')
            expect(route).toBeInstanceOf(Route)
        })
    })

    describe('initial state', () => {

        it('url is the one given to constructor', () => {

            const url = '/foo'
            const route = new Route('test', 'GET', url)
            expect(route.url.toString()).toEqual(url)
        })
    })
})
