function switcheroo(x){
    return x.split("a").map(x => x.split("b").join("a")).join("b");
}