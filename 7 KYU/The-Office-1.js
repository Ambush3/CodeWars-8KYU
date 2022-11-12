function outed(meet, boss) {
  let sum = 0;
  for (let key in meet) {
    if (key === boss) {
      sum += meet[key] * 2;
    } else {
      sum += meet[key];
    }
  }
  return sum / Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'; 
}