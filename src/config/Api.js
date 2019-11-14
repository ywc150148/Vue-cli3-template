const BASEURL = process.env.NODE_ENV == 'development' ? '/api' : 'https://www.baidu.com';

// 给每个接口地址加上 url
function addUrl(url, obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        for (let i in obj) {
            obj[i] = addUrl(url, obj[i]);
        }
    } else if (Object.prototype.toString.call(obj) === '[object String]') {
        obj = url + obj;
    }
    return obj;
}

const restful = {
    public: {
        blog: '/v1/blog',
    }
}

export const RESTFULAPI = addUrl(BASEURL, restful);
