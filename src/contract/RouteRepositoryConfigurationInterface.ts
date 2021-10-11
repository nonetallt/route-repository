import RouteRegistrarConfigurationInterface from './RouteRegistrarConfigurationInterface'

export default interface RouteRepositoryConfigurationInterface
{
    mutable?: boolean
    duplicates?: boolean
    registration?: RouteRegistrarConfigurationInterface
};
