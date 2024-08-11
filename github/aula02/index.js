function Fatorial (num) {
    if (num === 0 || num === 1) return num;
    let ultimo = num -1
    for (let index = 1;index < num;index++) {
        if (index <= ultimo) num *= index
        else{break}
    };
    return num
};

console.log(Fatorial(6))