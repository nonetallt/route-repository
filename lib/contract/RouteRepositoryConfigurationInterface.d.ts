import RouteRegistrarConfigurationInterface from './RouteRegistrarConfigurationInterface';
export default interface RouteRepositoryConfigurationInterface extends RouteRegistrarConfigurationInterface {
    mutable?: boolean;
    duplicates?: boolean;
}
