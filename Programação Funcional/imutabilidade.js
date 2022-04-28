 const cart = {
     quantity: 2,
     total: 200
 }
 
 //ERRADO!
 cart.quantity = 5;

 //CERTO!
 const newCart = {...cart, quantity: 5}