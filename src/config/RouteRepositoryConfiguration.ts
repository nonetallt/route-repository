import ConfigurationInterface from '../contract/RouteRepositoryConfigurationInterface'
import RouteRegistrarConfiguration from './RouteRegistrarConfiguration'

export default class RouteRepositoryConfiguration implements ConfigurationInterface
{
    readonly mutable: boolean
    readonly duplicates: boolean
    readonly registration: RouteRegistrarConfiguration

    constructor(config : ConfigurationInterface = {})
    {
        this.mutable = false;
        this.duplicates = false;
        this.registration = new RouteRegistrarConfiguration()

        Object.assign(this, config);
    }
}
