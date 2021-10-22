/**
 * Error that is thrown when parameter binding fails
 *
 */
export default class UriParameterBindingError extends Error {
    readonly previous: Error | null;
    constructor(message: string, previous?: Error);
}
