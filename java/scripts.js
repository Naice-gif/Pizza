
$(function () {
    $('.brief').hide();
    $('.everything').hide();

    $("#lookup").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
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