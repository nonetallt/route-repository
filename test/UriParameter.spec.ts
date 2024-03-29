import UriParameter from '../src/UriParameter'

describe('UriParameter', () => {

    it('parses name correctly when parameter is required', () => {
        const param = new UriParameter('{foo}')
        expect(param.name).toEqual('foo')
    })

    it('parses placeholder correctly when parameter is required', () => {
        const param = new UriParameter('{foo}')
        expect(param.placeholder).toEqual('{foo}')
    })

    it('parses required as true when parameter does not end with question mark', () => {
        const param = new UriParameter('{foo}')
        expect(param.required).toEqual(true)
    })

    it('parses required as false when parameter ends with question mark', () => {
        const param = new UriParameter('{foo?}')
        expect(param.required).toEqual(false)
    })

    it('parses name correctly when parameter is optional', () => {
        const param = new UriParameter('{foo?}')
        expect(param.name).toEqual('foo')
    })

    it('parses placeholder correctly when parameter is optional', () => {
        const param = new UriParameter('{foo?}')
        expect(param.placeholder).toEqual('{foo?}')
    })
})
