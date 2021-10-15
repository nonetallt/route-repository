import UriParameterBinder from '../src/UriParameterBinder'
import UriParameterBindingError from '../src/error/UriParameterBindingError'
import TypeConversionError from '../src/error/TypeConversionError'

describe('UriParameterBinder', () => {

    describe('bind', () => {

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
                const bound = binder.bind('/products/{category}', '')

            }).toThrow(UriParameterBindingError)
        })

        it('does not throw error when trying to bind optional property with empty string', () => {

            expect(() => {
                const binder = new UriParameterBinder()
                const bound = binder.bind('/products/{category?}', '')

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
    })
})
