export function totalValue(cart) {
    let acum = 0;
    cart.forEach(product => {
        acum += product.quantity * product.price;
    })
    return acum;
}
export function acounItem(cart) {
    let acum = 0;
    cart.forEach((product,i) => {i===0?
        acum += product.quantity * (i+1):acum += product.quantity * (i+1);
    })
    return acum;
}