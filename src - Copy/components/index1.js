const cart=["shoes","shocks","pants"];

createOrder(cart, function (orderId){
    proceedToPayment(orderId)
})

const promise= fetch("httP....");
promise.then(function (orderId){
    proceedToPayment(orderId)
})

