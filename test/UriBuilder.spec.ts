import UriBuilder from '../src/UriBuilder'

describe('UriBuilder', () => {

    describe('configuration', () => {

        describe('mergeQuery', () => {

            it('merges query when true', () => {
                const builder = UriBuilder.fromUriString('/path?baz=3', {baseUri: 'test?foo=1&bar=2', mergeQuery: true})
                expect(builder.build()).toEqual('test/path?foo=1&bar=2&baz=3')
            })

            it('prioritizes parameters of the given uri over base uri', () => {
                const builder = UriBuilder.fromUriString('/path?foo=2&baz=3', {baseUri: 'test?foo=1&bar=2', mergeQuery: true})
                expect(builder.build()).toEqual('test/path?foo=2&bar=2&baz=3')
            })

            it('does not merge query when false', () => {
                const builder = UriBuilder.fromUriString('/path?baz=3', {baseUri: 'test?foo=1&bar=2', mergeQuery: false})
                expect(builder.build()).toEqual('test/path?baz=3')
            })
        })
    })
})
