
$(function () {
    $('.brief').hide();
    $('.everything').hide();

    $("#lookup").click(function () {
        let crust = $("#crust option:selected").val();
        let flavour = $(".flavour option:selected").val();
        let topping = $("#toppings option:selected").val();
        let size = $("#size option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (f, c, t,s, n, total) => {
            return {f, c, t, s, n, total};
        };

        
        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 10;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 15;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 18;
                        } else {
                            totalPrice = (price * number) + 28;
                        }
                        break;
                };
            }); 
        });

        $("ul#your").append("<li><span class='contact'>" + newPizza_Order.fullOrder() + "</span></li>");
        $(".contact").last().click(function(){
           $("#show-your-order").show();
           $("#show-your-order h5").text(newPizza_Order.fullOrder());
           $(".pizza-size").text(newPizza_Order.sizePizza);
           $(".pizza-type").text(newPizza_Order.typePizza);
           $(".pizza-number").text(newPizza_Order.numberPizza);
           $(".pizza-favor").text(newPizza_Order.favoritePizza);
           $(".pizza-local").text(newPizza_Order.locationPizza);
           // $("ul#addresses").text("");
           // $(".pizza-local").text(newPizza_Order.locationPizza);
           // newPizza_Order.addresses.forEach(function(address) {
           //   $("ul#addresses").append("<li>" + address.numberPizza + ", " + address.favoritePizza+ "</li>");
           // });

        //$("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        //     $(".contact").last().click(function() {
        //       $("#show-contact").show();
        //       $("#show-contact h2").text(newContact.fullName());
        //       $(".first-name").text(newContact.firstName);
        //       $(".last-name").text(newContact.lastName);
        //       $("ul#addresses").text("");
        //       newContact.addresses.forEach(function(address) {
        //         $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
        //       });
        //     });
        let size, email;
     size = document.getElementById('#size').value;
     email = document.getElementById('#email').value;

   function subscribe() {
    alert("Hello " + email + "Thank for reaching out");
    console.log(email);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}

