	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli, $1.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 1.99
	},
	{
		name: "bread, $2.35",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		price: 2.35
	},
	{
		name: "salmon, $10.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 10.00
	},
	{
		name: "lentils, $3.15",
		vegetarian: true,
		guttenFree: false,
		organic: true,
		nonOrganic: false,
		price: 3.15
	},
	{
		name: "chickpeas, $4.15",
		vegetarian: true,
		gluttenFree: false,
		organic: true,
		nonOrganic: false,
		price: 4.15
	},
	{
		name: "spinach, $5.15",
		vegetarian: true,
		gluttenFree: false,
		organic: true,
		nonOrganic: false,
		price: 5.15
	},
	{
		name: "quinoa, $5.15",
		vegetarian: true, 
		gluttenFree: true,
		organic: false,
		nonOrganic: true,
		price: 5.15
	},
	{
		name: "almond milk, $4.15", 
		vegetarian: true,
		gluttenFree: true,
		organic: false,
		nonOrganic: true,
		price: 4.15
	},
	{
		name: "oats, $3.15",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		price: 3.15
	},
	{
		name: "brown rice, $2.15",
		vegetarian: true,
		gluttenFree: true,
		organic: true,
		nonOrganic: false,
		price: 2.15
	}, 
	{
		name: "assorted berries, $2.15", 
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		price: 2.15
	}, 
	{
		name: "pasta, $1.15",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		price: 1.15
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
let product_names = [];
function restrictListProducts(prods, restriction) {
	// Checks for vegetarian and/or glutten free
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}

	// Checks for organic or non-organic or none
	for (let i=0; i<prods.length; i+=1){
		if (restriction == "Organic"){
			product_names.push(prods[i].name);
		}
		else if (restriction == "Non-Organic"){
			product_names.push(prods[i].name);
		}
		else if (restriction == "No Preference"){
			products_name.push(prods[i].name);
		}
	}

	//Need to sort product_names by price
	
	for (let i=1; i<product_names.length; i+=1) {
		var current = product_names[i].price;
		//var j = i - 1;
		while (j >=i-1 && product_names[j].price > current) {
			product_names[j + 1] = product_names[j];
			j--;
		}
	}
	return product_names;
}

//function restrictListProductsPreference(prods, restriction) {}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<product_names.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
