function isSameLanguage(list) {
    return list.every((x) => x.language === list[0].language); // if all elements have the same language as the first element, return true else return false 
}