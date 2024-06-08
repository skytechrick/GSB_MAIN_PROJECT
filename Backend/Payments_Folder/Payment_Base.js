
const Razorpay = require("razorpay");
const key_id = "rzp_test_DBekxO3l7UI6ie";
const key_secret = "v0ko7dxpbSxDHaPxSnv8CkJb";
var instance = new Razorpay({
    key_id: key_id,
    key_secret: key_secret,
});

// instance.payments.fetch(paymentId)

Payment_Base = async (req, res) => {











    
    // instance.payments.all({
    //     from: '2024-06-06',
    //     to: '2024-06-08'
    // }).then((response) => {
    // // handle success
    //     console.log(response);
    // }).catch((error) => {
    // // handle error
    //     console.log("Error.....") 
    // })

    



    // API signature
// {razorpayInstance}.{resourceName}.{methodName}(resourceId [, params])

// example

    // instance.payments.fetch("pay_OJyPBsdMhpv8yw").then((response) => {
    // // handle success
    //     console.log(response);
    // }).catch((error) => {
    // // handle error
    //     console.log("Error.....");
    // })

    

    // var options = {
    //     amount: 50000,
    //     currency: "INR",
    //     receipt: "Order_ID",
    // };



    // instance.orders.create(options, function(err, order) {
    //     console.log(order);
    // });












    console.log("D");

    res.status(200).send(`Yes <br>`);


}
module.exports = Payment_Base;
