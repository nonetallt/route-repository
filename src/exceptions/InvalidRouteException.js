export default class InvalidRouteException extends Error
{
    constructor(message)
    {
        super(message);
        this.message = message;
    }
}
