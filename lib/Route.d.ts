import Uri from './Uri';
import RequestMethodType from './RequestMethodType';
import UriComponentType from './UriComponentType';
export default class Route {
    readonly name: string;
    readonly method: RequestMethodType;
    private _uri;
    readonly extra: object;
    constructor(name: string, method: RequestMethodType, uri: string | Uri, extra?: object);
    /**
     * Create a new instance of this route with the given name
     *
     */
    withName(name: string): Route;
    /**
     * Create a new instance of this route with the given request method
     *
     */
    withMethod(method: RequestMethodType): Route;
    /**
     * Create a new instance of this route with the given uri
     *
     */
    withUri(uri: string | Uri): Route;
    /**
     * Create a new instance of this route with the given uri component
     *
     */
    withUriComponent(component: UriComponentType, value: string): Route;
    /**
     * Create a new instnace of this route with the given extra
     *
     */
    withExtra(extra: object): Route;
    protected setUriComponent(component: UriComponentType, value: string): void;
    get uri(): Uri;
    private set uri(value);
}
