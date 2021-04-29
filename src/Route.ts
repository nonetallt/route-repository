import HttpRequestMethod from './HttpRequestMethod';

export default class Route
{
    name: string
    methods: Array<HttpRequestMethod>
    url: string

    constructor(name: string, method: HttpRequestMethod | Array<HttpRequestMethod>, url: string)
    {
        this.name = name
        this.methods = Array.isArray(method) ? method : [method]
        this.url = url
    }
}
