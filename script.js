var cart = [];
var items = [];


$(".add").click(function(){
  var item = $(".imagelink").val();
  alert(item);
  
  var price = $(".price").val();
  alert(price);
  
  

    
    console.log(price);
  
  
  var input = $(".price").val();
  cart.push(parseInt(price));
  items.push(item);
  $(".cart").append("<li>" + price + "</li>");
   
 
  
  
  
  
  
  
});




$(".purchase").click(function() {

    var sumTotal = 0;
        cart.forEach(function(price) {
        sumTotal = sumTotal + price;
    });  
     alert("Total price: " + sumTotal);
    });
   






