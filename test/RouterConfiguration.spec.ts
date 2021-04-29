import RouterConfiguration from '../src/RouterConfiguration'

describe('constructor', () => {

    it('initializes the object', () => {
		expect(new RouterConfiguration).toBeInstanceOf(RouterConfiguration)
    })

    it('initializes registration.immmutable default value', () => {
        const conf = new RouterConfiguration;
        expect(conf.registration.immutable).toEqual(true);
    })

    it('override default configuration values', () => {
        const conf = new RouterConfiguration({
            registration: {
                immutable: false
            }
        });

        expect(conf.registration.immutable).toEqual(false);
    })
})

describe('register', () => {
})
