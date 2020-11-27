const parts = require('../parts');
const display = require('../display.js');

module.exports = function(rl, cart) {
    display.displayHeader(cart);

    if(cart.lineItems.length === 0) {
        console.log('Your Cart is Empty')
    } else {
        console.log(cart.getDetailedDisplay())
    }
    
}