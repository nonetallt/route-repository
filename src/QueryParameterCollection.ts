export default class QueryParameterCollection extends Map<string, string>
{
    static fromQueryString(query: string) : QueryParameterCollection
    {
        const params = new QueryParameterCollection()

        query.split('&').forEach(keyValuePair => {
            const [key, value] = keyValuePair.split('=')
            params.set(key, value)
        })

        return params
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
        const newCollection = new QueryParameterCollection(this)

        collections.forEach(collection => {
            collection.forEach((value, name) => {
                newCollection.set(name, value)
            })
        })

        return newCollection
    }
}
