// Any characters after the # in the url, remove

function removeUrlAnchor(url){
    return url.split("#").shift()
}

function removeUrlAnchor(url){
    return url.split('#')[0]
}