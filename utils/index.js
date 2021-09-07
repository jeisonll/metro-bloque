export function totalValue(cart) {
    let acum = 0;
    cart.forEach(product => {
        acum += product.quantity * product.price;
    })
    return acum;
}