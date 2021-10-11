import UrlParameterCollection from '../src/UrlParameterCollection'
import UrlParameterSyntaxError from '../src/error/UrlParameterSyntaxError'

describe('UrlParameterCollection', () => {

    describe('parseFromUrl', () => {

        it('finds all parameters', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz?}')
            expect(params.length).toEqual(2)
        })

        it('throws error when optional parameters are before required ones', () => {

            expect(() => {
                const params = UrlParameterCollection.parseFromUrl('/foo/{bar?}/{baz}')
            }).toThrow(UrlParameterSyntaxError)
        })

        it('does not throw error with multiple optional trailing parameters', () => {
            expect(() => {
                const params = UrlParameterCollection.parseFromUrl('/foo/{bar?}/{baz?}')
            }).not.toThrow()
        })
    })

    describe('getNames', () => {

        it('finds all parameters with correct names', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz?}')
            expect(params.getNames()).toEqual(['bar', 'baz'])
        })
    })

    describe('getRequired', () => {

        it('gets all required parameters', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz?}')
            expect(params.getRequired().getNames()).toEqual(['bar'])
        })
    })

    describe('getParameter', () => {

        it('returns the UrlParameter instance when with the given name exists', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz}')
            const param = params.getParameter('bar') ?? {name: null}

            expect(param.name).toEqual('bar')
        })

        it('returns null when parameter does not exist', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz}')
            expect(params.getParameter('foobar')).toEqual(null)
        })
    })
})
