import UriParameterBinder from '../src/UriParameterBinder'
import UriParameterBindingError from '../src/error/UriParameterBindingError'
import TypeConversionError from '../src/error/TypeConversionError'

describe('UriParameterBinder', () => {

    describe('bind', () => {

        it('returns given uri string when there are no parameters to bind', () => {
            const binder = new UriParameterBinder()
            expect(binder.bind('foo', 'foo')).toEqual('foo')
        })

        it('throws error when binding undefined value for a required parameter', () => {
            const binder = new UriParameterBinder()

            expect(() => {
                binder.bind('/foo/{bar}', undefined)
            }).toThrow(UriParameterBindingError)
        })

        it('throws error when first required parameter is missing', () => {

            const binder = new UriParameterBinder()

            expect(() => {
                binder.bind('/foo/{bar}/{baz}', 'bar')
            }).toThrow(UriParameterBindingError)
        })

        it('throws error when second required parameter is missing', () => {

            const binder = new UriParameterBinder()

            expect(() => {
                binder.bind('/foo/{bar}/{baz}', 'baz')
            }).toThrow(UriParameterBindingError)
        })

        it('throws error when both required parameters are missing', () => {

            const binder = new UriParameterBinder()

            expect(() => {
                binder.bind('/foo/{bar}/{baz}', '')
            }).toThrow(UriParameterBindingError)
        })

        it('throws error when trying to bind required property with empty string', () => {

            expect(() => {
                const binder = new UriParameterBinder()
                binder.bind('/products/{category}', '')

            }).toThrow(UriParameterBindingError)
        })

        it('does not throw error when trying to bind optional property with empty string', () => {

            expect(() => {
                const binder = new UriParameterBinder()
                binder.bind('/products/{category?}', '')

            }).not.toThrow()
        })

        it('parameters are automatically uri encoded', () => {

            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category?}', 'category=foo')
            expect(bound).toEqual('/products/category%3Dfoo')
        })

        it('can bind string', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}', 'cpu')

            expect(bound).toEqual('/products/cpu')
        })

        it('can bind number', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}', 1)

            expect(bound).toEqual('/products/1')
        })

        it('can bind array of string values', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId}', ['cpu', '1'])

            expect(bound).toEqual('/products/cpu/1')
        })

        it('can bind array of number values', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId}', [1, 2])

            expect(bound).toEqual('/products/1/2')
        })

        it('can bind array of both string and number values', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId}', ['cpu', 2])

            expect(bound).toEqual('/products/cpu/2')
        })

        it('can bind object properties', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId}', {category: 'cpu', productId: 1})

            expect(bound).toEqual('/products/cpu/1')
        })

        it('can bind string-convertible object properties', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId}', {category: 'cpu', productId: 1})

            expect(bound).toEqual('/products/cpu/1')
        })

        it('leaves missing optional parameters empty', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId?}', {category: 'cpu'})

            expect(bound).toEqual('/products/cpu')
        })

        it('removes excess slashes with multiple missing optional parameters', () => {
            const binder = new UriParameterBinder()
            const bound = binder.bind('/products/{category}/{productId?}/{spec?}', {category: 'cpu'})

            expect(bound).toEqual('/products/cpu')
        })

        it('can override configuration when new configuration is supplied', () => {

            const binder = new UriParameterBinder({trailingSlashes: false})
            const bound = binder.bind('/products/{category}/{productId?}/{spec?}', {category: 'cpu'}, {trailingSlashes: true})

            expect(bound).toEqual('/products/cpu//')
        })
    })

    describe('configuration', () => {

        describe('bindGetParameters', () => {

            it('binds path parameters', () => {
                const binder = new UriParameterBinder({bindGetParameters: true})
                expect(binder.bind('/products/{category}', {category: 'foo'})).toEqual('/products/foo')
            })

            it('binds query parameters', () => {
                const binder = new UriParameterBinder({bindGetParameters: true})
                expect(binder.bind('/products', {category: 'foo'})).toEqual('/products?category=foo')
            })

            it('can bind both uri and query parameters', () => {
                const binder = new UriParameterBinder({bindGetParameters: true})
                expect(binder.bind('/products/{category}', {category: 'foo', bar: 'bar'})).toEqual('/products/foo?bar=bar')
            })

            it('merges query parameters when query exists on uri', () => {
                const binder = new UriParameterBinder({bindGetParameters: true})
                expect(binder.bind('/products/{category}?search=example', {category: 'foo', page: 1, preview: false})).toEqual('/products/foo?search=example&page=1&preview=false')
            })

            it('binds arrays correctly', () => {
                const binder = new UriParameterBinder({bindGetParameters: true})
                const filters = ['foo', 'bar'];
                expect(binder.bind('/products', {filters: filters})).toEqual('/products?filters[0]=foo&filters[1]=bar')
            })

            it('binds multi-dimensional arrays correctly', () => {
                const binder = new UriParameterBinder({bindGetParameters: true})
                const filters = ['foo', ['foo', 'bar']];
                expect(binder.bind('/products', {filters: filters})).toEqual('/products?filters[0]=foo&filters[1][0]=foo&filters[1][1]=bar')
            })
        })

        describe('typeConversionFunction', () => {

            it('converts values using the given function', () => {

                const binder = new UriParameterBinder({typeConversionFunction: (value) => {
                    if(value === true) return 'true'
                    throw new TypeConversionError("Value was not good")
                }})

                expect(binder.bind('/foo/{bar}', {bar: true})).toEqual('/foo/true')
            })

            it('wraps TypeConversionException', () => {

                const binder = new UriParameterBinder({typeConversionFunction: (value) => {
                    if(value === true) return 'true'
                    throw new TypeConversionError("Value was not good")
                }})

                expect(() => {
                    binder.bind('/foo/{bar}', {bar: false})
                }).toThrow(UriParameterBindingError)
            })
        })

        describe('encodeUriParameters', () => {

            it('encodes uri parameters when true', () => {
                const binder = new UriParameterBinder({encodeUriParameters: true})
                const bar = 'value=bar'
                const baz = 'value=baz'
                expect(binder.bind('/foo/{bar}/{baz}', {bar: bar, baz: baz})).toEqual(`/foo/${encodeURIComponent(bar)}/${encodeURIComponent(baz)}`)
            })

            it('does not encode uri parameters when false', () => {
                const binder = new UriParameterBinder({encodeUriParameters: false})
                const bar = 'value=bar'
                const baz = 'value=baz'
                expect(binder.bind('/foo/{bar}/{baz}', {bar: bar, baz: baz})).toEqual(`/foo/${bar}/${baz}`)
            })

        })

        describe('encodeGetParameters', () => {

            it('encodes get parameters when true', () => {
                const binder = new UriParameterBinder({bindGetParameters: true, encodeGetParameters: true})
                const bar = 'value=bar'
                const baz = 'value=baz'
                expect(binder.bind('/foo', {bar: bar, baz: baz})).toEqual(`/foo?bar=${encodeURIComponent(bar)}&baz=${encodeURIComponent(baz)}`)
            })

            it('does not encode get parameters when false', () => {
                const binder = new UriParameterBinder({bindGetParameters: true, encodeGetParameters: false})
                const bar = 'value=bar'
                const baz = 'value=baz'
                expect(binder.bind('/foo', {bar: bar, baz: baz})).toEqual(`/foo?bar=${bar}&baz=${baz}`)
            })
        })

        describe('trailingSlashes', () => {

            it('does not remove trailing slashes when true', () => {
                const binder = new UriParameterBinder({trailingSlashes: true})
                expect(binder.bind('/foo/{bar?}/{baz?}/', {})).toEqual('/foo///')
            })

            it('removes trailing slashes when false', () => {
                const binder = new UriParameterBinder({trailingSlashes: false})
                expect(binder.bind('/foo/{bar?}/{baz?}/', {})).toEqual('/foo')
            })
        })
    })
})
