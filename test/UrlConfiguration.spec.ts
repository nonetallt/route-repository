import UrlConfiguration from '../src/config/UrlConfiguration'
import ConfigurationError from '../src/error/ConfigurationError'

describe('UrlConfiguration', () => {

    describe('constructor', () => {

        it('throws error when baseUrl is relative', () => {
            expect(() => {
                const config = new UrlConfiguration({baseUrl: '/baz'})
            }).toThrow(ConfigurationError)
        })
    })
})
