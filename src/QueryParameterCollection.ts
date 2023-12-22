import QueryParameter from "./QueryParameter"

/**
 * A collection of query parameters. Note that QueryParameter singular class does not exist
 * because having a data object for a value with only 2 string keys would be redundant.
 *
 */
export default class QueryParameterCollection extends Map<string, QueryParameter>
{
    static fromObject(parameters: object) : QueryParameterCollection
    {
        return new QueryParameterCollection(Array.from(Object.entries(parameters).map(([key, value]) => {
            return [key, value instanceof QueryParameter ? value : new QueryParameter(key, value)]
        })))
    }

    /**
     * Create a new query parameter collection from a query string
     *
     */
    static fromQueryString(query: string) : QueryParameterCollection
    {
        const params = new QueryParameterCollection()

        for(const keyValuePair of query.split('&')) {
            const [key, value] = keyValuePair.split('=')
            params.set(key, new QueryParameter(key, value))
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

        for(const [path, parameter] of this) {

            let paramName = parameter.key
            let paramValue = parameter.value

            if(urlEncode) {
                paramName = encodeURIComponent(paramName)
                paramValue = encodeURIComponent(paramValue)
            }
            parts.push(`${paramName}${parameter.arrayAccessor ?? ''}=${paramValue}`)
        }

        return parts.join('&')
    }

    /**
     * Merge this collection with multiple other collections or maps
     *
     */
    merge(...collections: Array<Map<string, QueryParameter>>) : QueryParameterCollection
    {
        const newCollection = new QueryParameterCollection(this)

        for(const collection of collections) {
            for(const [name, parameter] of collection) {
                newCollection.set(name, parameter)
            }
        }

        return newCollection
    }
}
