"use strict";

function processOrder()
{
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
    var order_details = "<h2>Order Details for " + firstname + " " + lastname + ":</h2>";
    var target_element = document.getElementById("order_details");

    var table_details = "";
    table_details += "<table>";
    table_details += "<thead>";
    table_details += "<tr>";
    table_details += "<th>Charge Category</th>";
    table_details += "<th>Description</th>";
    table_details += "<th>Amount</th>";
    table_details += "</tr>";
    table_details += "</thead>";
    table_details += "<tbody>";

    // determine which size selected
    var size = "";
    var base_price = 12;
    if(document.getElementById('small').checked) 
    {
        size = "small";
    }
    else if(document.getElementById('medium').checked) {
        size = "medium";
        base_price = 17;
    }
    else if(document.getElementById('large').checked) {
        size = "large";
        base_price = 21;
    }
    else if(document.getElementById('x-large').checked) {
        size = "x-large";
        base_price = 16;
    }


    table_details += "<tr>";
    table_details += `<td>Base Charge</td>`;
    table_details += `<td>Basic charge for a ${size} pizza</td>`;
    table_details += `<td>$${base_price.toFixed(2)}</td>`;
    table_details += "</tr>";


    // determine how many regular toppings selected
    var toppings_count = 0;
    var toppings_price = 0;
    if(document.getElementById('pepperoni').checked) 
    {
        toppings_count += 1;
    }
    if(document.getElementById('peppers').checked) {
        toppings_count += 1;
    }
    if(document.getElementById('onions').checked) {
        toppings_count += 1;
    }
    toppings_price += (toppings_count * 1);

    table_details += "<tr>";
    table_details += `<td>Toppings Charge</td>`;
    table_details += `<td>Charge for ${toppings_count} regular toppings</td>`;
    table_details += `<td>$${toppings_price.toFixed(2)}</td>`;
    table_details += "</tr>";

    // determine how many premium toppings selected
    var premium_toppings_count = 0;
    var premium_toppings_price = 0;
    if(document.getElementById('sausage').checked) 
    {
        premium_toppings_count += 1;
    }
    if(document.getElementById('pineapple').checked) {
        premium_toppings_count += 1;
    }
    premium_toppings_price += (premium_toppings_count * 2);

    table_details += "<tr>";
    table_details += `<td>Premium Toppings Charge</td>`;
    table_details += `<td>Charge for ${premium_toppings_count} premium toppings</td>`;
    table_details += `<td>$${premium_toppings_price.toFixed(2)}</td>`;
    table_details += "</tr>";

    // determine delivery charge
    var delivery_charge = 0;
    var select_element = document.getElementById("location");
    var delivery_location = select_element.options[select_element.selectedIndex].value;
    if (delivery_location == "Halifax" || delivery_location == "Dartmouth") 
    {
        delivery_charge = 2.00;
    }
    else if(delivery_location == "Lower Sackville" || delivery_location == "Bedford") 
    {
        delivery_charge = 5.00;
    } 
    // if(document.getElementById('sausage').checked) 
    // {
    //     premium_toppings_count += 1;
    // }
    // if(document.getElementById('pineapple').checked) {
    //     premium_toppings_count += 1;
    // }
    //premium_toppings_price += (premium_toppings_count * 2);

    table_details += "<tr>";
    table_details += `<td>Delivery Charge</td>`;
    
    if(delivery_charge == 0)
    {
        table_details += `<td>No delivery available to that location</td>`;
        table_details += `<td>$${delivery_charge.toFixed(2)}</td>`;
    }
    else
    {
        table_details += `<td>Delivery charge ${delivery_location}</td>`;
        table_details += `<td>$${delivery_charge.toFixed(2)}</td>`;
    }
    
    table_details += "</tr>";

    // Display total
    var total = base_price + toppings_price + premium_toppings_price + delivery_charge;

    table_details += "<tr>";
    table_details += `<td>Total</td>`;
    table_details += `<td></td>`;
    table_details += `<td>$${total.toFixed(2)}</td>`;
    table_details += "</tr>";

    table_details += "</tbody>";
    table_details += "</table>";

    target_element.innerHTML = order_details + table_details;
}

function checkLocation()
{
    // determine delivery location
    var select_element = document.getElementById("location");
    var delivery_location = select_element.options[select_element.selectedIndex].value;

    if(delivery_location == "Other")
    {
        alert("Sorry, we cannot delivery to that location.");
    }
}

document.getElementById('process_order').addEventListener('click',processOrder);
document.getElementById('location').addEventListener('change',checkLocation);