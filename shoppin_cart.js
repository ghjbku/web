let shopping_cart = [{
    id:0,
    product: "applu",
    quantity: 3,
    price_per_unit: 10
},
{
    id:1,
    product: "banana",
    quantity: 1,
    price_per_unit: 23  
},{
    id:2,
    product: "cherry",
    quantity: 6,
    price_per_unit: 5  
},{
    id:3,
    product: "date",
    quantity: 100,
    price_per_unit: 6  
}];

console.log("full cost:???\nAvg cost per product:???\nMost expensive prod(unit price):???\nMost expensive prod(total):???");

function find_product(variable,property,value){
    if (property === "most_total")
    {
        return variable.quantity*variable.price_per_unit === value;
    }
    else if (property ==="price_per_unit"){
    return variable.price_per_unit === value;
    }
}
total_cost = 0;
function calc_all_cost(variable,index) {
    console.log(index+": "+variable.quantity*variable.price_per_unit);
		total_cost = total_cost + (variable.quantity*variable.price_per_unit);
}
shopping_cart.forEach(calc_all_cost);
avg_cost = total_cost/ shopping_cart.length;
console.log("total cost:"+total_cost+"\navg:"+avg_cost);

let max = 0;
function find_unit(val,index){
    if (val.price_per_unit > max){
    max = val.price_per_unit;
    }
}
let most_total = 0;
function find_most_total(val,index){

    helper = (val.quantity*val.price_per_unit);

    if (helper > most_total){
            most_total = helper;
    }
}
shopping_cart.forEach(find_unit);
shopping_cart.forEach(find_most_total);

console.log("maxprice per unit:"+shopping_cart[shopping_cart.findIndex(val=> find_product(val,"price_per_unit",max))].product);
console.log("maxprice total:"+shopping_cart[shopping_cart.findIndex(val=> find_product(val,"most_total",most_total))].product);
