import Url from '../src/Url'

describe('Url', () => {

    describe('toString', () => {

        it('returns url content for absolute urls', () => {
            const url = new Url('https://example.com/foo/bar')
            expect(url.toString()).toEqual('https://example.com/foo/bar')
        })

        it('returns url content for relative urls', () => {
            const url = new Url('/foo/bar')
            expect(url.toString()).toEqual('/foo/bar')
        })
    })

    describe('isAbsolute', () => {

        it('returns true when url is absolute', () => {
            const url = new Url('http://example.com/foo/bar')
            expect(url.isAbsolute()).toEqual(true)
        })

        it('returns false when url is not absolute', () => {
            const url = new Url('/foo/bar')
            expect(url.isAbsolute()).toEqual(false)
        })
    })

    describe('isRelative', () => {

        it('returns true when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.isRelative()).toEqual(true)
        })

        it('returns false when url is not relative', () => {
            const url = new Url('http://example.com/foo/bar')
            expect(url.isRelative()).toEqual(false)
        })
    })

    describe('scheme', () => {

        it('returns null when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.scheme).toEqual(null)
        })

        it('returns http when scheme is http', () => {
            const url = new Url('http://example.com/foo/bar')
            expect(url.scheme).toEqual('http')
        })

        it('returns https when scheme is https', () => {
            const url = new Url('https://example.com/foo/bar')
            expect(url.scheme).toEqual('https')
        })
    })

    describe('username', () => {

        it('returns null when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.username).toEqual(null)
        })

        it('returns username when url is absolute', () => {
            const url = new Url('http://user:password@example.com')
            expect(url.username).toEqual('user')
        })
    })

    describe('password', () => {

        it('returns null when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.password).toEqual(null)
        })

        it('returns username when url is absolute', () => {
            const url = new Url('http://user:password@example.com')
            expect(url.password).toEqual('password')
        })
    })

    describe('host', () => {

        it('returns null when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.host).toEqual(null)
        })

        it('returns domain when url is absolute', () => {
            const url = new Url('http://example.com/foo/bar')
            expect(url.host).toEqual('example.com')
        })

        it('returns domain when port is present', () => {
            const url = new Url('http://example.com:8080/foo')
            expect(url.host).toEqual('example.com')
        })

        it('returns domain for localhost', () => {
            const url = new Url('http://localhost/foo/bar')
            expect(url.host).toEqual('localhost')
        })

        it('returns domain for localhost when port is present', () => {
            const url = new Url('http://localhost:8080/foo/bar')
            expect(url.host).toEqual('localhost')
        })

        it('does not return path with domain', () => {
            const url = new Url('http://example.com/foo')
            expect(url.host).toEqual('example.com')
        })

        it('does not return trailing query', () => {
            const url = new Url('http://example.com?baz=1')
            expect(url.host).toEqual('example.com')
        })

        it('does not return trailing fragment', () => {
            const url = new Url('https://example.com#baz')
            expect(url.host).toEqual('example.com')
        })

        it('returns only the domain with complex url string', () => {
            const url = new Url('http://username:password@example.com:9090/path?arg=value#anchor')
            expect(url.host).toEqual('example.com')
        })
    })

    describe('port', () => {

        it('returns null when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.port).toEqual(null)
        })

        it('returns username when url is absolute', () => {
            const url = new Url('http://example.com:8080')
            expect(url.port).toEqual(8080)
        })

        it('does not return trailing query', () => {
            const url = new Url('http://example.com:8080?foo=bar')
            expect(url.port).toEqual(8080)
        })

        it('does not return trailing fragment', () => {
            const url = new Url('http://example.com:8080#foo')
            expect(url.port).toEqual(8080)
        })
    })

    describe('path', () => {

        it('returns path when url is absolute', () => {
            const url = new Url('http://example.com/foo/bar')
            expect(url.path).toEqual('foo/bar')
        })

        it('returns path when url is relative', () => {
            const url = new Url('/foo/bar')
            expect(url.path).toEqual('foo/bar')
        })

        it('does not return trailing query', () => {
            const url = new Url('/foo/bar?baz=1')
            expect(url.path).toEqual('foo/bar')
        })

        it('does not return trailing fragment', () => {
            const url = new Url('/foo/bar#baz')
            expect(url.path).toEqual('foo/bar')
        })
    })

    describe('queryString', () => {

        it('returns query when url is relative', () => {
            const url = new Url('/foo/bar?foo=1&bar=2')
            expect(url.queryString).toEqual('foo=1&bar=2')
        })

        it('returns query when url is absolute', () => {
            const url = new Url('http://example.com/foo/bar?foo=1&bar=2')
            expect(url.queryString).toEqual('foo=1&bar=2')
        })

        it('does not return trailing fragment', () => {
            const url = new Url('/foo/bar?foo=1&bar=2#baz')
            expect(url.queryString).toEqual('foo=1&bar=2')
        })
    })

    describe('queryParameters', () => {

        it('returns query when url is relative', () => {
            const url = new Url('/foo/bar?foo=1&bar=2')
            expect(url.queryParameters).toEqual(new Map(Object.entries({foo: '1', bar: '2'})))
        })

        it('returns query when url is absolute', () => {
            const url = new Url('http://example.com/foo/bar?foo=1&bar=2')
            expect(url.queryParameters).toEqual(new Map(Object.entries({foo: '1', bar: '2'})))
        })
    })

    describe('fragment', () => {

        it('returns fragment when url is absolute', () => {
            const url = new Url('http://example.com/foo/bar#baz')
            expect(url.fragment).toEqual('baz')
        })

        it('returns fragment when url is relative', () => {
            const url = new Url('/foo/bar#baz')
            expect(url.fragment).toEqual('baz')
        })
    })

    describe('userinfo', () => {

        it('returns userinfo when url is absolute', () => {
            const url = new Url('http://foo:bar@example.com/foo/bar#baz')
            expect(url.userinfo).toEqual('foo:bar')
        })

        it('returns userinfo when url is relative', () => {
            const url = new Url('foo:bar@foo/bar#baz')
            expect(url.userinfo).toEqual('foo:bar')
        })
    })

    describe('configuration', () => {

        describe('baseUrl', () => {

            it('applies to relative url', () => {
                const url = new Url('/bar/baz', {baseUrl: 'http://example.com/foo'})
                expect(url.toString()).toEqual('http://example.com/foo/bar/baz')
            })

            it('does not apply to absolute url', () => {
                const url = new Url('http://foo.com/bar/baz', {baseUrl: 'http://example.com/foo'})
                expect(url.toString()).toEqual('http://foo.com/bar/baz')
            })
        })
    })
})
