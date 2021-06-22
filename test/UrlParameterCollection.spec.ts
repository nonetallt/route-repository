import UrlParameterCollection from '../src/UrlParameterCollection'

describe('UrlParameterCollection', () => {

    describe('parse', () => {

        it('finds all parameters', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz?}')
            expect(params.length).toEqual(2)
        })
    })

    describe('getNames', () => {
        it('finds all parameters with correct names', () => {
            const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz?}')
            expect(params.getNames()).toEqual(['bar', 'baz'])
        })
    })

    describe('getRequired', () => {
        const params = UrlParameterCollection.parseFromUrl('/foo/{bar}/{baz?}')
        expect(params.getRequired().getNames()).toEqual(['bar'])
    })
})
