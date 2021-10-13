import QueryParameterCollection from '../src/QueryParameterCollection'

describe('QueryParameterCollection', () => {

    describe('fromQueryString', () => {

        it('parses the parameters correctly', () => {
            const params = QueryParameterCollection.fromQueryString('foo=1&bar=2&baz=3')
            expect(params.get('foo')).toEqual('1')
            expect(params.get('bar')).toEqual('2')
            expect(params.get('baz')).toEqual('3')
        })
    })

    describe('merge', () => {

        it('returns a merged collection', () => {
            const params = new QueryParameterCollection();
            params.set('foo', '1')
            const merged = params.merge(new Map([['bar', '2']]), new Map([['baz', '3']]))

            expect(merged.get('foo')).toEqual('1')
            expect(merged.get('bar')).toEqual('2')
            expect(merged.get('baz')).toEqual('3')
        })
    })

    describe('stringify', () => {

        it('returns string representation', () => {
            const params = new QueryParameterCollection([['foo', '1'], ['bar', '2'], ['baz', '3']])

            expect(params.stringify(true)).toEqual('foo=1&bar=2&baz=3')
        })

        it('encodes parameters when encode arg is true', () => {
            const encoded = 'foo=bar'
            const params = new QueryParameterCollection([['foo', '1'], ['bar', '2'], ['baz', encoded]])

            expect(params.stringify(true)).toEqual(`foo=1&bar=2&baz=${encodeURIComponent(encoded)}`)
        })

        it('does not encode parameters when encode arg is false', () => {
            const encoded = 'foo=bar'
            const params = new QueryParameterCollection([['foo', '1'], ['bar', '2'], ['baz', encoded]])

            expect(params.stringify(false)).toEqual(`foo=1&bar=2&baz=foo=bar`)
        })
    })

    describe('toString', () => {

        it('automatically encodes parameters', () => {

            const encoded = 'foo=bar'
            const params = new QueryParameterCollection([['foo', '1'], ['bar', '2'], ['baz', encoded]])

            expect(params.toString()).toEqual(`foo=1&bar=2&baz=${encodeURIComponent(encoded)}`)
        })
    })
})
