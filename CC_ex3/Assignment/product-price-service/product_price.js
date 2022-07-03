module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions

    this.add('role:product,cmd:getProductPrice', productPrice);

    
    function productPrice(msg, respond) {
        for(x in  msg){
            if(msg.product_id == x.product_id){
                var product_price = x.product_price;
                respond(null, { result: product_price });
            }
            else {
                respond(null, { result: ''});
            }
        }
            
    }
    //To DO: add the pattern functions and describe the logic inside the function

}