/**
 * Error that is returned when uri has incorrect syntax
 *
 */
export default class UriSyntaxError extends Error {
    readonly previous: Error | null;
    constructor(message: string, previous?: Error);
}
