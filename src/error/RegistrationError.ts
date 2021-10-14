export default class RegistrationError extends Error
{
    readonly previous: Error | null

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, RegistrationError.prototype);
        this.previous = previous ?? null
    }
}
