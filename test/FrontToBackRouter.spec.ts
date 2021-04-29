import FrontToBackRouter from '../src/FrontToBackRouter'
import RegistrationError from '../src/Error/RegistrationError'
import Route from '../src/Route'

describe('constructor', () => {

    it('initializes the object', () => {
		expect(new FrontToBackRouter).toBeInstanceOf(FrontToBackRouter)
    })

    it('initializes routes as empty', () => {
        let router = new FrontToBackRouter
		expect(router.routes).toMatchObject({})
    })
})

describe('register', () => {

    it('adds new route to routes', () => {
        let router = new FrontToBackRouter
        router.register('new_route', 'GET', '/foo')
        expect(router.routes).toHaveProperty('new_route')
    })

    it('throws error if route is already defined and strict registration is used', () => {
        let router = new FrontToBackRouter({
            registration: {
                immutable: true
            }
        })

        expect(() => {
            router.register('foo', 'GET', '/foo');
            router.register('foo', 'GET', '/foo');

        }).toThrow(RegistrationError)
    })
})


describe('registerRoute', () => {

    it('adds new route to routes', () => {
        let router = new FrontToBackRouter
        router.register(new Route('new_route', 'GET', '/foo'))
        expect(router.routes).toHaveProperty('new_route')
    })
})
