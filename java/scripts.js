var Orders = function(crust,toppings,size,number){
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
  this.number = number;
}

Orders.prototype.fullOrder = function (){
  return this.number + " " + this.size + ", " +  this.crust +", " + this.toppings;
}
var topArray = ["Sausage, caramelized onions,fennel", "Sardines,red onions,black olives" , "BBQ sauce, grilled chicken" , "corned beef pastrami,Swiss cheese" , "Corn,spicy Italian salami", "Buffalo chicken,blue cheese"];
var sizePrice,crustPrice,toppingsPrice;
var totalPrice = [];
var sumTotal = 0;
function price(size,crust,toppings){ 
  if(size==="Regular"){
      sizePrice = 10;
      if(crust==="thin crust"){
          crustPrice = 2;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
      else if(crust==="thick crust" || crust=== "FlatBread crust"){
          crustPrice=4;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
      else if(crust==="Custom crust"){
          crustPrice=3;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
  }
  else if(size==="Medium"){
      sizePrice = 15;
      if(crust==="thin crust"){
          crustPrice = 2;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
      else if(crust==="thick crust" || crust==="FlatBread crust"){
          crustPrice=4;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
      else if(crust==="Custom crust"){
          crustPrice=3;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
  }
  else if(sizePrice==="Large"){
      sizePrice = 20;
      if(crust==="thin crust"){
          crustPrice = 2;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===toppingsArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
      else if(crust==="thick crust" || crust==="FlatBread crust"){
          crustPrice=4;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
      else if(crust==="Custom crust"){
          crustPrice=3;
          if (toppings===topArray[0] || toppings===topArray[1]){
              toppingsPrice = 10;
          }
          else if(toppings===topArray[2] || toppings===topArray[4]){
              toppingsPrice = 15;
          }
          else if(toppings===topArray[3] || toppings===topArray[5]){
              toppingsPrice = 20;
          }
      }
  }

  var pricing = ( crustPrice + toppingsPrice + sizePrice ) * number;
  console.log("pricing: "+pricing);
  totalPrice.push(pricing);
  console.log(totalPrice);
  if(totalPrice.length>0){
      for(var i=0;i<totalPrice.length;i++){
          sumTotal+=totalPrice[i];
          console.log("sum " + sumTotal);
      }
  }
  return (crustPrice + toppingsPrice + sizePrice)  * number;
}

function resetInputs(){
  $("#crust").val("");
  $("#toppings").val("");
  $("#size").val("");
  $("#num").val("");
}

var pizzaCrust, pizzaToppings, pizzaSize, number;
$(document).ready(function(){
  $("#lookup").click(function(event){
      event.preventDefault();
      alert("Please enter a new order or checkup what you order");
      
      pizzaCrust = $("#crust").val();
      console.log(pizzaCrust);
      pizzaToppings = $("#toppings").val();
      console.log(pizzaToppings);
      pizzaSize = $("#size").val();
      console.log(pizzaSize);
      number = $("#num").val();
      console.log(number);
      
      var newOrder = new Orders(pizzaCrust,pizzaToppings, pizzaSize, number);

      $("ol#orders").append('<li><span>'+ newOrder.fullOrder() +'</span></li>');
      $("ol#costs").append('<li><span>'+ "cost: " + price(pizzaSize, pizzaCrust, pizzaToppings) + "$" +'</span></li>');
      resetInputs();
  });

  $("#checkout").click(function(){
      $(".hidden").show();
      $("h4#totals").append(" "+ sumTotal + "$.");
  });

  });
 

  