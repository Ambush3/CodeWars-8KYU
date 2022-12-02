function gordon(a) {
    return a.toUpperCase().replace(/[EIOU]/g, '*').replace(/[A]/g, '@').replace(/\s/g, '!!!! ') + '!!!!';
}
