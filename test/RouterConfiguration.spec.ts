import { RouterConfiguration } from '../src/RouterConfiguration'

describe('constructor', () => {

    it('initializes the object', () => {
		expect(new RouterConfiguration).toBeInstanceOf(RouterConfiguration)
    })

    it('initializes immmutable default value as true', () => {
        const conf = new RouterConfiguration;
        expect(conf.immutable).toEqual(true);
    })

    it('initializes duplicates default value as false', () => {
        const conf = new RouterConfiguration;
        expect(conf.duplicates).toEqual(false);
    })

    it('overrides default configuration values', () => {
        const conf = new RouterConfiguration({
            immutable: false
        });

        expect(conf.immutable).toEqual(false);
    })
})
