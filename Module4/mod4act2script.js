function compute () {
    let comp = prompt("Enter first number", '');
    let comp2 = prompt("Enter second number", '');

    if(comp > comp2){
        alert (`Value A (${comp}) is higher than Value B (${comp2})`);
    } else if (comp < comp2){
        alert (`Value B (${comp2}) is higher than Value A (${comp})`);
    } else {
        alert (`Value A (${comp}) and Value B (${comp2}) is equal`);
    }


}
