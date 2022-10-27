function isRubyComing(list) {
    const languages = list.filter(lists => lists.language === 'Ruby');
    return languages.length > 0 ? true : false;
}