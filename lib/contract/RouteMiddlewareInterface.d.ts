import Route from '../Route';
export default interface RouteMiddlewareInterface {
    /**
     * @throws RegistrationError
     *
     * Apply the middleware to a given route.
     *
     */
    applyMiddleware: (route: Route) => Route;
}
