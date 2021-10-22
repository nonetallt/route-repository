/**
 * Error that is thrown when parameter type conversion fails.
 *
 */
export default class TypeConversionError extends Error {
    readonly previous: Error | null;
    constructor(message: string, previous?: Error);
}
