import QueryParameter from '../src/QueryParameter'
import QueryParameterCollection from '../src/QueryParameterCollection'

describe('QueryParameterCollection', () => {

    describe('fromQueryString', () => {

        it('parses the parameters correctly', () => {
            const params = QueryParameterCollection.fromQueryString('foo=1&bar=2&baz=3')
            expect(params.get('foo')?.value).toEqual('1')
            expect(params.get('bar')?.value).toEqual('2')
            expect(params.get('baz')?.value).toEqual('3')
        })
    })

    describe('merge', () => {

        it('can merge multiple maps', () => {
            const params = QueryParameterCollection.fromObject({foo: '1'})
            const merged = params.merge(new Map([['bar', new QueryParameter('bar', '2')]]), new Map([['baz', new QueryParameter('baz', '3')]]))

            expect(merged.get('foo')?.value).toEqual('1')
            expect(merged.get('bar')?.value).toEqual('2')
            expect(merged.get('baz')?.value).toEqual('3')
        })

        it('can merge multiple query parameter collections', () => {
            const params1 = QueryParameterCollection.fromObject({foo: '1'})
            const params2 = QueryParameterCollection.fromObject({bar: '2'})

            const merged = params1.merge(params2)
            expect(merged.get('foo')?.value).toEqual('1')
            expect(merged.get('bar')?.value).toEqual('2')
        })
    })

    describe('stringify', () => {

        it('returns string representation', () => {
            const params = QueryParameterCollection.fromObject({
                foo: '1',
                bar: '2',
                baz: '3'
            })
            expect(params.stringify(true)).toEqual('foo=1&bar=2&baz=3')
        })

        it('encodes parameters when encode arg is true', () => {
            const encoded = 'foo=bar'
            const params = QueryParameterCollection.fromObject({
                foo: '1',
                bar: '2',
                baz: encoded
            })

            expect(params.stringify(true)).toEqual(`foo=1&bar=2&baz=${encodeURIComponent(encoded)}`)
        })

        it('does not encode parameters when encode arg is false', () => {
            const encoded = 'foo=bar'
            const params = QueryParameterCollection.fromObject({
                foo: '1',
                bar: '2',
                baz: encoded
            })
            expect(params.stringify(false)).toEqual('foo=1&bar=2&baz=foo=bar')
        })

        it('does not encode string accessors', () => {

            const params = QueryParameterCollection.fromObject({
                foo: '1',
                bar: '2',
                ['baz[0]']: new QueryParameter('baz', '3' ,'[0]'),
                ['baz[1]']: new QueryParameter('baz', '4' ,'[1]')
            })
            expect(params.stringify(true)).toEqual('foo=1&bar=2&baz[0]=3&baz[1]=4')
        })
    })

    describe('toString', () => {

        it('automatically encodes parameters', () => {
            const encoded = 'foo=bar'
            const params = QueryParameterCollection.fromObject({
                foo: '1',
                bar: '2',
                baz: encoded
            })

            expect(params.toString()).toEqual(`foo=1&bar=2&baz=${encodeURIComponent(encoded)}`)
        })
    })
})
