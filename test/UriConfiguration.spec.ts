import UriConfiguration from '../src/config/UriConfiguration'
import ConfigurationError from '../src/error/ConfigurationError'

describe('UriConfiguration', () => {

    describe('constructor', () => {

        it('throws error when baseUri is relative', () => {
            expect(() => {
                const config = new UriConfiguration({baseUri: '/baz'})
            }).toThrow(ConfigurationError)
        })
    })
})
