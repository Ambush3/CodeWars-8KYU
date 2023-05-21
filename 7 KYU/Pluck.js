function pluck(objs, name) {
    return objs.map(obj => obj.hasOwnProperty(name) ? obj[name] : undefined);
}