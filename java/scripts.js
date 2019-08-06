document.getElementById("").addEventListener("click", function () {
    prompt("enter your address");
    alert("Thank you for considering us, delivery shall be there in few"); 
   })
  
  document.getElementById("pick").addEventListener("click", function () {
    alert("Thank you for visiting us!"); 
   })
  function Pizza(size,crust,topping,quantity,total){
      this.size=size;
      this.crust=crust;
      this.topping=topping;
      this.quantity=quantity;
      this.total= total
  };
  // Pizza.prototype.getPrice=function(){
  //   return this.totalPrice
  
  $(document).ready(function(){ 
      $("#brief").click(function(event){
      event.preventDefault();
      var selectSize=$("#size option:selected").text();
      var selectCrust=$("crust option:selected").text();
      var selectTopping=$("#toppings option:selected").text();
      var inputQuantity=$("input#quantity").val();
         
     
      var pizzaSize=$("#size").val(); 
      var pizzaCrust=$("#crust").val();
      var pizzaTops=$("#toppings").val();
      var pizzaQuantity=$("#quantity").val();
      var totalPrice
           
      Pizza.prototype.getPrice=function(){
        return this.totalPrice};
      // console.log(newPizza);
         
  
        
        
  ////////////////////////pricing codes /////////////////
  
  let price;
  
        switch (pizzaSize) {
            case pizzaSize = "regular":
                price = 1000;
                if (pizzaCrust === "thin" && pizzaTops===$("#toppings").val()){
                  totalPrice = (price * pizzaQuantity) + 1000;
                } else if (pizzaCrust === "thick"&& pizzaTops===$("#toppings").val()) {
                  totalPrice = (price * pizzaQuantity) + 1500;
                } else if (pizzaCrust === "flatbread"&& pizzaTops===$("#toppings").val()) {
                  totalPrice = (price * pizzaQuantity) + 2000;
                }else if (pizzaCrust==="custom"&& pizzaTops===$("#toppings").val()){
                  totalPrice = (price*pizzaQuantity)+ 2500
                }
                
                break;
            case pizzaSize = "medium":
              price=2000
              if (pizzaCrust === "thin" && pizzaTops===$("#toppings").val()){
                totalPrice = (price * pizzaQuantity) + 2000;
            } else if (pizzaCrust === "thick"&& pizzaTops===$("#toppings").val()) {
              totalPrice = (price * pizzaQuantity) + 2500;
            } else if (pizzaCrust === "flatbread"&& pizzaTops===$("#toppings").val()) {
              totalPrice = (price * pizzaQuantity) + 3000;
            }else if (pizzaCrust==="custom"&& pizzaTops===$("#toppings").val()){
              totalPrice = (price*pizzaQuantity)+ 3500
             } 

                break;
            case pizzaSize = "large":
                price = 3000;
                if (pizzaCrust === "thin" && pizzaTops===$("#toppings").val()){
                  totalPrice = (price * pizzaQuantity) + 3000;
              } else if (pizzaCrust === "thick"&& pizzaTops===$("#toppings").val()) {
                totalPrice = (price * pizzaQuantity) + 3500;
              } else if (pizzaCrust === "flatbread"&& pizzaTops===$("#toppings").val()) {
                totalPrice = (price * pizzaQuantity) + 4000;
              }else if (pizzaCrust==="custom"&& pizzaTops===$("#toppings").val()){
                totalPrice = (price*pizzaQuantity)+ 4500
              }
            }
            var newPizza = new Pizza(pizzaSize,pizzaCrust,pizzaTops,pizzaQuantity,totalPrice);
  
              
              console.log(newPizza)
              console.log(totalPrice)
              $(".list").show();
              $(".size").text(newPizza.size);
              $(".type").text(newPizza.crust);
              $(".your").text(newPizza.topping);
              $(".number").text(newPizza.quantity);
              $(".ttt").text(newPizza.total);  
  
          })
          });
  