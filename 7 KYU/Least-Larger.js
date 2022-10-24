const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(element => element > a[i])))
