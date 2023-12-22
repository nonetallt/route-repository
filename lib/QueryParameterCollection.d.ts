import QueryParameter from "./QueryParameter";
/**
 * A collection of query parameters. Note that QueryParameter singular class does not exist
 * because having a data object for a value with only 2 string keys would be redundant.
 *
 */
export default class QueryParameterCollection extends Map<string, QueryParameter> {
    static fromObject(parameters: object): QueryParameterCollection;
    /**
     * Create a new query parameter collection from a query string
     *
     */
    static fromQueryString(query: string): QueryParameterCollection;
    /**
     * Get the string representation of this object
     *
     */
    toString(): string;
    /**
     * Get the string representation of this object
     *
     */
    stringify(urlEncode: boolean): string;
    /**
     * Merge this collection with multiple other collections or maps
     *
     */
    merge(...collections: Array<Map<string, QueryParameter>>): QueryParameterCollection;
}
