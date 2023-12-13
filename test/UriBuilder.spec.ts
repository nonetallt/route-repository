import UriBuilder from '../src/UriBuilder'
import UriComponent from '../src/UriComponent'

describe('UriBuilder', () => {

    describe('configuration', () => {

        describe('build', () => {

          it('builds uri consisting of slash correctly', () => {
            const builder = new UriBuilder(new Map([[UriComponent.Path, '/']]))
            expect(builder.build()).toEqual('/')
          })
        })

        describe('baseUri', () => {

            it('prepends authority before relative uri', () => {
                const builder = UriBuilder.fromUriString('/bar', {baseUri: 'https://foo:bar@example.com/foo'})
                expect(builder.build()).toEqual('https://foo:bar@example.com/foo/bar')
            })

            it('does not prepend authority before absolute uri', () => {
                const builder = UriBuilder.fromUriString('bar', {baseUri: 'https://foo:bar@example.com/foo'})
                expect(builder.build()).toEqual('bar')
            })

            it('prepends path before relative uri', () => {
                const builder = UriBuilder.fromUriString('/bar', {baseUri: '/foo'})
                expect(builder.build()).toEqual('/foo/bar')
            })

            it('does not prepend path before absolute uri', () => {
                const builder = UriBuilder.fromUriString('bar/baz', {baseUri: '/foo'})
                expect(builder.build()).toEqual('bar/baz')
            })
        })

        describe('defaultScheme', () => {

            it('sets default scheme when hostname is defined but scheme is not', () => {
                const builder = UriBuilder.fromUriString('foo', {defaultScheme: 'http'})
                expect(builder.build()).toEqual('http://foo')
            })

            it('does not set default scheme when scheme is already defined by uri', () => {
                const builder = UriBuilder.fromUriString('https://foo', {defaultScheme: 'http'})
                expect(builder.build()).toEqual('https://foo')
            })

            it('does not set default scheme when scheme is already defined by baseUri', () => {
                const builder = UriBuilder.fromUriString('/foo', {defaultScheme: 'http', baseUri: 'https://example.com'})
                expect(builder.build()).toEqual('https://example.com/foo')
            })

            it('does not set scheme when hostname is not defined', () => {
                const builder = UriBuilder.fromUriString('/foo', {defaultScheme: 'http'})
                expect(builder.build()).toEqual('/foo')
            })
        })

        describe('overrideScheme', () => {

            it('sets scheme when hostname is defined but scheme is not', () => {
                const builder = UriBuilder.fromUriString('foo', {overrideScheme: 'http'})
                expect(builder.build()).toEqual('http://foo')
            })

            it('overrides scheme when scheme is already defined by uri', () => {
                const builder = UriBuilder.fromUriString('http://foo', {overrideScheme: 'https'})
                expect(builder.build()).toEqual('https://foo')
            })

            it('overrides scheme when scheme is already defined by defaultScheme', () => {
                const builder = UriBuilder.fromUriString('foo', {overrideScheme: 'https', defaultScheme: 'http'})
                expect(builder.build()).toEqual('https://foo')
            })

            it('overrides scheme when scheme is already defined by baseUri', () => {
                const builder = UriBuilder.fromUriString('/foo', {overrideScheme: 'https', baseUri: 'http://example.com'})
                expect(builder.build()).toEqual('https://example.com/foo')
            })

            it('does not set scheme when hostname is not defined', () => {
                const builder = UriBuilder.fromUriString('/foo', {overrideScheme: 'http'})
                expect(builder.build()).toEqual('/foo')
            })

        })

        describe('mergeQuery', () => {

            it('merges query of a relative uri when true', () => {
                const builder = UriBuilder.fromUriString('/path?baz=3', {baseUri: '/test?foo=1&bar=2', mergeQuery: true})
                expect(builder.build()).toEqual('/test/path?foo=1&bar=2&baz=3')
            })

            it('does not merge query of an absolute uri when true', () => {
                const builder = UriBuilder.fromUriString('foo/path?baz=3', {baseUri: '/test?foo=1&bar=2', mergeQuery: true})
                expect(builder.build()).toEqual('foo/path?baz=3')
            })

            it('prioritizes parameters of the given uri over base uri', () => {
                const builder = UriBuilder.fromUriString('/path?foo=2&baz=3', {baseUri: '/test?foo=1&bar=2', mergeQuery: true})
                expect(builder.build()).toEqual('/test/path?foo=2&bar=2&baz=3')
            })

            it('does not merge query when false', () => {
                const builder = UriBuilder.fromUriString('/path?baz=3', {baseUri: '/test?foo=1&bar=2', mergeQuery: false})
                expect(builder.build()).toEqual('/test/path?baz=3')
            })
        })
    })
})
