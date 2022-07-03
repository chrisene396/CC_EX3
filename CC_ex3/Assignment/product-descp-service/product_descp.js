module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);
    
    function productURL(msg, respond) {
        for(x in  msg){
            if(msg.product_id == x.product_id){
                var product_url = x.product_url;
                respond(null, { result: product_url });
            }
            else {
                respond(null, { result: ''});
            }
        }
            
    }
    function productName(msg, respond) {
        for(x in  msg){
            if(msg.product_id == x.product_id){
                var product_name = x.product_name;
                respond(null, { result: product_name });
            }
            else {
                respond(null, { result: ''});
            }
        }
            
    }
    //To DO: add the pattern functions and describe the logic inside the function

}