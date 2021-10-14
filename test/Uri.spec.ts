import Uri from '../src/Uri'

describe('Uri', () => {

    describe('toString', () => {

        it('returns uri content for absolute uris', () => {
            const uri = new Uri('https://example.com/foo/bar')
            expect(uri.toString()).toEqual('https://example.com/foo/bar')
        })

        it('returns uri content for relative uris', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.toString()).toEqual('/foo/bar')
        })
    })

    describe('isAbsolute', () => {

        it('returns true when uri is absolute', () => {
            const uri = new Uri('http://example.com/foo/bar')
            expect(uri.isAbsolute()).toEqual(true)
        })

        it('returns false when uri is not absolute', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.isAbsolute()).toEqual(false)
        })
    })

    describe('isRelative', () => {

        it('returns true when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.isRelative()).toEqual(true)
        })

        it('returns false when uri is not relative', () => {
            const uri = new Uri('http://example.com/foo/bar')
            expect(uri.isRelative()).toEqual(false)
        })
    })

    describe('scheme', () => {

        it('returns null when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.scheme).toEqual(null)
        })

        it('returns http when scheme is http', () => {
            const uri = new Uri('http://example.com/foo/bar')
            expect(uri.scheme).toEqual('http')
        })

        it('returns https when scheme is https', () => {
            const uri = new Uri('https://example.com/foo/bar')
            expect(uri.scheme).toEqual('https')
        })
    })

    describe('username', () => {

        it('returns null when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.username).toEqual(null)
        })

        it('returns username when uri is absolute', () => {
            const uri = new Uri('http://user:password@example.com')
            expect(uri.username).toEqual('user')
        })
    })

    describe('password', () => {

        it('returns null when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.password).toEqual(null)
        })

        it('returns username when uri is absolute', () => {
            const uri = new Uri('http://user:password@example.com')
            expect(uri.password).toEqual('password')
        })
    })

    describe('host', () => {

        it('returns null when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.host).toEqual(null)
        })

        it('returns domain when uri is absolute', () => {
            const uri = new Uri('http://example.com/foo/bar')
            expect(uri.host).toEqual('example.com')
        })

        it('returns domain when port is present', () => {
            const uri = new Uri('http://example.com:8080/foo')
            expect(uri.host).toEqual('example.com')
        })

        it('returns domain for localhost', () => {
            const uri = new Uri('http://localhost/foo/bar')
            expect(uri.host).toEqual('localhost')
        })

        it('returns domain for localhost when port is present', () => {
            const uri = new Uri('http://localhost:8080/foo/bar')
            expect(uri.host).toEqual('localhost')
        })

        it('does not return path with domain', () => {
            const uri = new Uri('http://example.com/foo')
            expect(uri.host).toEqual('example.com')
        })

        it('does not return trailing query', () => {
            const uri = new Uri('http://example.com?baz=1')
            expect(uri.host).toEqual('example.com')
        })

        it('does not return trailing fragment', () => {
            const uri = new Uri('https://example.com#baz')
            expect(uri.host).toEqual('example.com')
        })

        it('returns only the domain with complex uri string', () => {
            const uri = new Uri('http://username:password@example.com:9090/path?arg=value#anchor')
            expect(uri.host).toEqual('example.com')
        })
    })

    describe('port', () => {

        it('returns null when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.port).toEqual(null)
        })

        it('returns username when uri is absolute', () => {
            const uri = new Uri('http://example.com:8080')
            expect(uri.port).toEqual(8080)
        })

        it('does not return trailing query', () => {
            const uri = new Uri('http://example.com:8080?foo=bar')
            expect(uri.port).toEqual(8080)
        })

        it('does not return trailing fragment', () => {
            const uri = new Uri('http://example.com:8080#foo')
            expect(uri.port).toEqual(8080)
        })
    })

    describe('path', () => {

        it('returns path when uri is absolute', () => {
            const uri = new Uri('http://example.com/foo/bar')
            expect(uri.path).toEqual('foo/bar')
        })

        it('returns path when uri is relative', () => {
            const uri = new Uri('/foo/bar')
            expect(uri.path).toEqual('foo/bar')
        })

        it('does not return trailing query', () => {
            const uri = new Uri('/foo/bar?baz=1')
            expect(uri.path).toEqual('foo/bar')
        })

        it('does not return trailing fragment', () => {
            const uri = new Uri('/foo/bar#baz')
            expect(uri.path).toEqual('foo/bar')
        })
    })

    describe('queryString', () => {

        it('returns query when uri is relative', () => {
            const uri = new Uri('/foo/bar?foo=1&bar=2')
            expect(uri.queryString).toEqual('foo=1&bar=2')
        })

        it('returns query when uri is absolute', () => {
            const uri = new Uri('http://example.com/foo/bar?foo=1&bar=2')
            expect(uri.queryString).toEqual('foo=1&bar=2')
        })

        it('does not return trailing fragment', () => {
            const uri = new Uri('/foo/bar?foo=1&bar=2#baz')
            expect(uri.queryString).toEqual('foo=1&bar=2')
        })
    })

    describe('queryParameters', () => {

        it('returns query when uri is relative', () => {
            const uri = new Uri('/foo/bar?foo=1&bar=2')
            expect(uri.queryParameters?.toString()).toEqual('foo=1&bar=2')
        })

        it('returns query when uri is absolute', () => {
            const uri = new Uri('http://example.com/foo/bar?foo=1&bar=2')
            expect(uri.queryParameters?.toString()).toEqual('foo=1&bar=2')
        })
    })

    describe('fragment', () => {

        it('returns fragment when uri is absolute', () => {
            const uri = new Uri('http://example.com/foo/bar#baz')
            expect(uri.fragment).toEqual('baz')
        })

        it('returns fragment when uri is relative', () => {
            const uri = new Uri('/foo/bar#baz')
            expect(uri.fragment).toEqual('baz')
        })
    })

    describe('userinfo', () => {

        it('returns userinfo when uri is absolute', () => {
            const uri = new Uri('http://foo:bar@example.com/foo/bar#baz')
            expect(uri.userinfo).toEqual('foo:bar')
        })

        it('returns userinfo when uri is relative', () => {
            const uri = new Uri('foo:bar@foo/bar#baz', {prependSlash: false})
            expect(uri.userinfo).toEqual('foo:bar')
        })
    })

    describe('configuration', () => {

        describe('prependSlash', () => {

            it('prepends slash before uri when true', () => {
                const uri = new Uri('foo', {prependSlash: true})
                expect(uri.toString()).toEqual('/foo')
            })

            it('does not prepend additional slashes when uri already starts with one', () => {
                const uri = new Uri('/foo', {prependSlash: true})
                expect(uri.toString()).toEqual('/foo')
            })

            it('does not prepend slash before uri when false', () => {
                const uri = new Uri('foo', {prependSlash: false})
                expect(uri.toString()).toEqual('foo')
            })

            it('is true by default', () => {
                const uri = new Uri('foo')
                expect(uri.toString()).toEqual('/foo')
            })
        })
    })
})
