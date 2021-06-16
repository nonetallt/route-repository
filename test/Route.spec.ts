import Route from '../src/Route'

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
        expect(route.url).toEqual(url)
    })
})

describe('apply prefix', () => {

    it('prepends a given prefix to the url', () => {

        const prefix = 'foo'
        const url = '/foo'
        const route = new Route('test', 'GET', url)

        route.applyPrefix(prefix)
        expect(route.url).toEqual(`${prefix}${url}`)
    })
})
