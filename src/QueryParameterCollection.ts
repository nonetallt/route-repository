/**
 * A collection of query parameters. Note that QueryParameter singular class does not exist
 * because having a data object for a value with only 2 string keys would be redundant.
 *
 */
export default class QueryParameterCollection extends Map<string, string>
{
    /**
     * Create a new query parameter collection from a query string
     *
     */
    static fromQueryString(query: string) : QueryParameterCollection
    {
        const params = new QueryParameterCollection()

        for(const keyValuePair of query.split('&')) {
            const [key, value] = keyValuePair.split('=')
            params.set(key, value)
        }

        return params
    }

    /**
     * Get the string representation of this object
     *
     */
    toString() : string
    {
        return this.stringify(true)
    }

    /**
     * Get the string representation of this object
     *
     */
    stringify(urlEncode: boolean) : string
    {
        const parts = new Array<string>()

        for(const [name, value] of this) {

            let paramName = name
            let paramValue = value

            if(urlEncode) {
                paramName = encodeURIComponent(name)
                paramValue = encodeURIComponent(value)
            }
            parts.push(`${paramName}=${paramValue}`)
        }

        return parts.join('&')
    }

    /**
     * Merge this collection with multiple other collections or maps
     *
     */
    merge(...collections: Array<Map<string, string>>) : QueryParameterCollection
    {
        const newCollection = new QueryParameterCollection(this)

        for(const collection of collections) {
            for(const [name, value] of collection) {
                newCollection.set(name, value)
            }
        }

        return newCollection
    }
}
