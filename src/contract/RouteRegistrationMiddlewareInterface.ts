import Route from '../Route'

export default interface RouteRegistrationMiddlewareInterface
{
    apply: (route: Route) => Route
}
