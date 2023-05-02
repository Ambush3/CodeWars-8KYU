function search(budget, prices) {
    return (prices.sort((a,b)=>a-b).filter(i=>i<=budget))+''
}