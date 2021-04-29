export default class RegistrationError extends Error
{
    constructor(message: string)
    {
        super(message)
        Object.setPrototypeOf(this, RegistrationError.prototype);
    }
}
