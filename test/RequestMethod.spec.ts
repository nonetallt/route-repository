import Method from '../src/RequestMethod'

function testFunction(method: Method)
{
    return method
}


it('accepts GET', () => {
    expect(testFunction('GET')).toEqual('GET')
})

it('accepts POST', () => {
    expect(testFunction('POST')).toEqual('POST')
})

it('accepts PUT', () => {
    expect(testFunction('PUT')).toEqual('PUT')
})

it('accepts PATCH', () => {
    expect(testFunction('PATCH')).toEqual('PATCH')
})

it('accepts DELETE', () => {
    expect(testFunction('DELETE')).toEqual('DELETE')
})

it('accepts HEAD', () => {
    expect(testFunction('HEAD')).toEqual('HEAD')
})

it('accepts CONNECT', () => {
    expect(testFunction('CONNECT')).toEqual('CONNECT')
})

it('accepts OPTIONS', () => {
    expect(testFunction('OPTIONS')).toEqual('OPTIONS')
})

it('accepts TRACE', () => {
    expect(testFunction('TRACE')).toEqual('TRACE')
})
