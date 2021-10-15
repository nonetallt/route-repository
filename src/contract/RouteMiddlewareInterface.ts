import Route from '../Route'

export default interface RouteMiddlewareInterface
{
    applyMiddleware: (route: Route) => Route
}
