import Configuration from '../src/config/RouteRepositoryConfiguration'

describe('RouteRepositoryConfiguration', () => {

    describe('constructor', () => {

        it('initializes the object', () => {
            expect(new Configuration).toBeInstanceOf(Configuration)
        })

        it('initializes mutable default value as false', () => {
            const conf = new Configuration;
            expect(conf.mutable).toEqual(false);
        })

        it('initializes duplicates default value as false', () => {
            const conf = new Configuration;
            expect(conf.duplicates).toEqual(false);
        })

        it('overrides default configuration values', () => {
            const conf = new Configuration({
                mutable: true
            });

            expect(conf.mutable).toEqual(true);
        })
    })
})
