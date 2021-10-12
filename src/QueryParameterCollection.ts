export default class QueryParameterCollection extends Map<string, string>
{
    constructor(query: string | null = null)
    {
        super()

        if(query !== null) {
            query.split('&').forEach(keyValuePair => {
                const [key, value] = keyValuePair.split('=')
                this.set(key, value)
            })
        }
    }

    toString() : string
    {
        return this.stringify(true)
    }

    stringify(urlEncode: boolean) : string
    {
        const parts = new Array<string>()

        this.forEach((value, name) => {
            if(urlEncode) {
                name = encodeURIComponent(name)
                value = encodeURIComponent(value)
            }
            parts.push(`${name}=${value}`)
        })

        return parts.join('&')
    }

    merge(...collections: Array<Map<string, string>>) : QueryParameterCollection
    {
        const collection = new QueryParameterCollection()

        collections.forEach(collection => {
            collection.forEach((value, name) => {
                collection.set(name, value)
            })
        })

        return collection
    }
}
