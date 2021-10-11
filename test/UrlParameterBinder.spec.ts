import Url from '../src/Url'
import UrlParameterBinder from '../src/UrlParameterBinder'
import UrlParameterBindingError from '../src/error/UrlParameterBindingError'

describe('UrlParameterBinder', () => {

    describe('bind', () => {

        it('throws error when first required parameter is missing', () => {

            const binder = new UrlParameterBinder(new Url( '/foo/{bar}/{baz}'))

            expect(() => {
                binder.bind('bar')
            }).toThrow(UrlParameterBindingError)
        })

        it('throws error when second required parameter is missing', () => {

            const binder = new UrlParameterBinder(new Url( '/foo/{bar}/{baz}'))

            expect(() => {
                binder.bind('baz')
            }).toThrow(UrlParameterBindingError)
        })

        it('throws error when both required parameters are missing', () => {

            const binder = new UrlParameterBinder(new Url( '/foo/{bar}/{baz}'))

            expect(() => {
                binder.bind('')
            }).toThrow(UrlParameterBindingError)
        })

        it('throws error when trying to bind required property with empty string', () => {

            expect(() => {
                const binder = new UrlParameterBinder(new Url('/products/{category}'))
                const bound = binder.bind('')

            }).toThrow(UrlParameterBindingError)
        })

        it('does not throw error when trying to bind optional property with empty string', () => {

            expect(() => {
                const binder = new UrlParameterBinder(new Url('/products/{category?}'))
                const bound = binder.bind('')

            }).not.toThrow()
        })

        it('parameters are automatically url encoded', () => {

            const binder = new UrlParameterBinder(new Url('/products/{category?}'))
            const bound = binder.bind('category=foo')
            expect(bound).toEqual('/products/category%3Dfoo')
        })

        it('can bind string', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}'))
            const bound = binder.bind('cpu')

            expect(bound).toEqual('/products/cpu')
        })

        it('can bind number', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}'))
            const bound = binder.bind(1)

            expect(bound).toEqual('/products/1')
        })

        it('can bind array of string values', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId}'))
            const bound = binder.bind(['cpu', '1'])

            expect(bound).toEqual('/products/cpu/1')
        })

        it('can bind array of number values', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId}'))
            const bound = binder.bind([1, 2])

            expect(bound).toEqual('/products/1/2')
        })

        it('can bind array of both string and number values', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId}'))
            const bound = binder.bind(['cpu', 2])

            expect(bound).toEqual('/products/cpu/2')
        })

        it('can bind object properties', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId}'))
            const bound = binder.bind({category: 'cpu', productId: 1})

            expect(bound).toEqual('/products/cpu/1')
        })

        it('can bind string-convertible object properties', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId}'))
            const bound = binder.bind({category: 'cpu', productId: 1})

            expect(bound).toEqual('/products/cpu/1')
        })

        it('leaves missing optional parameters empty', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId?}'))
            const bound = binder.bind({category: 'cpu'})

            expect(bound).toEqual('/products/cpu')
        })

        it('removes excess slashes with multiple missing optional parameters', () => {
            const binder = new UrlParameterBinder(new Url('/products/{category}/{productId?}/{spec?}'))
            const bound = binder.bind({category: 'cpu'})

            expect(bound).toEqual('/products/cpu')
        })

        /* TODO test GET binding */
    })

    describe('canBindObject', () => {

        it('returns false when required properties are missing', () => {

            const binder = new UrlParameterBinder(new Url('/products/{category}'))

            expect(binder.canBindObject({})).toEqual(false)
        })

        it('returns true when only optional properties are missing', () => {

            const binder = new UrlParameterBinder(new Url('/products/{category}'))

            expect(binder.canBindObject({category: 'foo'})).toEqual(true)
        })
    })
})
