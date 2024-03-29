import UriParameterCollection from '../src/UriParameterCollection'
import UriParameterSyntaxError from '../src/error/UriParameterSyntaxError'

describe('UriParameterCollection', () => {

    describe('fromUriString', () => {

        it('finds all parameters', () => {
            const params = UriParameterCollection.fromUriString('/foo/{bar}/{baz?}')
            expect(params.size).toEqual(2)
        })

        it('throws error when optional parameters are before required ones', () => {

            expect(() => {
                UriParameterCollection.fromUriString('/foo/{bar?}/{baz}')
            }).toThrow(UriParameterSyntaxError)
        })

        it('does not throw error with multiple optional trailing parameters', () => {
            expect(() => {
                UriParameterCollection.fromUriString('/foo/{bar?}/{baz?}')
            }).not.toThrow()
        })
    })

    describe('getNames', () => {

        it('finds all parameters with correct names', () => {
            const params = UriParameterCollection.fromUriString('/foo/{bar}/{baz?}')
            expect(params.getNames()).toEqual(['bar', 'baz'])
        })
    })

    describe('getRequired', () => {

        it('gets all required parameters', () => {
            const params = UriParameterCollection.fromUriString('/foo/{bar}/{baz?}')
            expect(params.getRequired().getNames()).toEqual(['bar'])
        })
    })

    describe('getParameter', () => {

        it('returns the UriParameter instance when with the given name exists', () => {
            const params = UriParameterCollection.fromUriString('/foo/{bar}/{baz}')
            const param = params.getParameter('bar') ?? {name: null}

            expect(param.name).toEqual('bar')
        })

        it('returns null when parameter does not exist', () => {
            const params = UriParameterCollection.fromUriString('/foo/{bar}/{baz}')
            expect(params.getParameter('foobar')).toEqual(null)
        })
    })
})
