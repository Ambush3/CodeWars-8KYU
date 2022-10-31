function getFirstPython(list) {
  let pythonDev = list.find(dev => dev.language === 'Python');
  return pythonDev ? `${pythonDev.firstName}, ${pythonDev.country}` : 'There will be no Python developers';
}