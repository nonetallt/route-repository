import { RepositoryConfiguration } from '../src/RepositoryConfiguration'

describe('constructor', () => {

    it('initializes the object', () => {
		expect(new RepositoryConfiguration).toBeInstanceOf(RepositoryConfiguration)
    })

    it('initializes mutable default value as false', () => {
        const conf = new RepositoryConfiguration;
        expect(conf.mutable).toEqual(false);
    })

    it('initializes duplicates default value as false', () => {
        const conf = new RepositoryConfiguration;
        expect(conf.duplicates).toEqual(false);
    })

    it('overrides default configuration values', () => {
        const conf = new RepositoryConfiguration({
            mutable: true
        });

        expect(conf.mutable).toEqual(true);
    })
})
