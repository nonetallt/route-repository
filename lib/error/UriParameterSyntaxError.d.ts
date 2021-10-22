/**
 * Error that is thrown when parameter syntax is incorrect
 *
 */
export default class UriParameterSyntaxError extends Error {
    readonly previous: Error | null;
    constructor(message: string, previous?: Error);
}
