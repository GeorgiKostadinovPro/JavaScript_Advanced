function requestValidator(httpRequestObj){
    const uriRegex = new RegExp(/^(?:\*|[A-Za-z\.\d]+)$/gm);
    const messageRegex = new RegExp(/^[^<>\\&'"]*$/gm);
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if(!httpRequestObj.hasOwnProperty('method')
    || !validMethods.includes(httpRequestObj.method)){
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if(!httpRequestObj.hasOwnProperty('uri')
    || httpRequestObj.uri === '' || !httpRequestObj.uri.match(uriRegex)){
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if(!httpRequestObj.hasOwnProperty('version')
    || !validVersions.includes(httpRequestObj.version)){
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if(!httpRequestObj.hasOwnProperty('message')
    || !httpRequestObj.message.match(messageRegex)){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return httpRequestObj;
}

requestValidator({ method: 'GET',
                   uri: 'svn.public.catalog',
                   version: 'HTTP/1.1',
                   message: '' });

requestValidator({ method: 'OPTIONS',
                   uri: 'git.master',
                   version: 'HTTP/1.1',
                   message: '-recursive' });
    
requestValidator({ method: 'POST', 
                   uri: 'home.bash', 
                   message: 'rm -rf /*' });
               