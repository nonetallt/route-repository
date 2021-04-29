import Method from '../src/HttpRequestMethod'


it('contains GET', () => {
    expect(Method).toHaveProperty('GET')
})

it('contains POST', () => {
    expect(Method).toHaveProperty('POST')
})

it('contains PUT', () => {
    expect(Method).toHaveProperty('PUT')
})

it('contains PATCH', () => {
    expect(Method).toHaveProperty('PATCH')
})

it('contains DELETE', () => {
    expect(Method).toHaveProperty('DELETE')
})

it('contains HEAD', () => {
    expect(Method).toHaveProperty('HEAD')
})

it('contains CONNECT', () => {
    expect(Method).toHaveProperty('CONNECT')
})

it('contains OPTIONS', () => {
    expect(Method).toHaveProperty('OPTIONS')
})

it('contains TRACE', () => {
    expect(Method).toHaveProperty('TRACE')
})
