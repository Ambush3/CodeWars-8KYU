// remove '!' from left to right

remove = (s, n) => n > 0 ? remove(s.replace('!', ''), n - 1) : s;  // if n is greater than 0, then remove '!' from left to right and call remove again with n - 1 until n is 0 and return s 