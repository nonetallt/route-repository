import Url from './Url'
import UrlComponent from './UrlComponent'
import UrlSyntaxError from './error/UrlSyntaxError'
import BaseUrlConfiguration from './config/BaseUrlConfiguration'

const parseRegex = new RegExp(/^((?<scheme>https?):\/\/)?((?<userinfo>(?<username>[^:]+):(?<password>[^@]+))?@)?(?<host>[^\/?#:]+)?(:(?<port>[0-9]+))?(\/(?<path>[^?#]+))?(\?(?<query>[^#]+))?(#(?<fragment>.+))?/)

/**
 * Internal, should not be part of the public API
 *
 */
export default class UrlBuilder extends Map<UrlComponent, string>
{
    constructor(components: Map<UrlComponent, string>, baseConfig: BaseUrlConfiguration | null = null)
    {
        super(components)

        if(baseConfig !== null) {
            this.applyBaseUri(baseConfig)
        }
    }

    /**
     * @throws UrlSyntaxError
     *
     */
    static fromUrlString(url: string, baseUrl: Url | null = null) : UrlBuilder
    {
        const match = url.match(parseRegex)

        if(match === null || match.groups === undefined) {
            const msg = `Cannot parse given url string '${url}'`
            throw new UrlSyntaxError(msg)
        }

        const parsed = new Map<UrlComponent, string>()

        Object.values(UrlComponent).forEach(component => {
            if(match.groups !== undefined) {
                const value = match.groups[component]

                if(value !== undefined) {
                    parsed.set(component, value)
                }
            }
        })

        return new UrlBuilder(parsed, baseUrl)
    }

    build() : string
    {
        let url = ''

        url += this.getComponentString('', UrlComponent.Scheme, '://')
        url += this.getComponentString('', UrlComponent.Userinfo, '@')
        url += this.getComponentString('', UrlComponent.Host)
        url += this.getComponentString(':', UrlComponent.Port)
        url += this.getComponentString('/', UrlComponent.Path)
        url += this.getComponentString('?', UrlComponent.Query)
        url += this.getComponentString('#', UrlComponent.Fragment)

        return url
    }

    private applyBaseUri(baseConfig: BaseUrlConfiguration)
    {

        if(! this.has(UrlComponent.Scheme)) {

        const baseComponents = [
            UrlComponent.Scheme,
            UrlComponent.Userinfo,
            UrlComponent.Username,
            UrlComponent.Password,
            UrlComponent.Host,
            UrlComponent.Port
        ]

        baseComponents.forEach(component => {
            const baseValue = baseConfig.uri.getComponent(component)

            if(! this.has(component) && baseValue !== null) {
                const componentValue = baseConfig.uri.getComponent(component)

                if(componentValue !== null) {
                    this.set(component, componentValue)
                }
            }
        })

        /* TODO merge path, merge query (depending on config arg) */
        if(baseConfig.mergeBasePath)
    }

    /**
     * Get an url component with added content, internal build use
     *
     */
    private getComponentString(prepend: string, component: UrlComponent, append: string = '') : string
    {
        if(! this.has(component) || this.get(component) === null) {
            return ''
        }

        return prepend + this.get(component) + append
    }
}
