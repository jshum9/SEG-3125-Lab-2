	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli, $3.99",
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
		name: "almond milk, $1.15", 
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

function restrictListProducts(prods, restriction) {
	let product_names = [];

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
		else if (restriction == "Non-Organic"){
			product_names.push(prods[i].name);
		}
		else if (restriction == "No Preference"){
			products_name.push(prods[i].name);
		}
		else if (restriction == "Organic"){
			product_names.push(prods[i].name);
		}
	}

	//Need to sort product_names by price
	var temp;
    var swapped;
    for (let i = 0; i < product_names.length - 1; i++) 
    {
        swapped = false;
        for (let j = 0; j < product_names.length - i; j++) 
        {
            if (product_names[j] > product_names[j + 1]) 
            {
                temp = product_names[j];
                product_names[j] = product_names[j + 1];
                product_names[j + 1] = temp;
                swapped = true;
            }
		}
        if (swapped == false)
        break;
    }

	return product_names;
}

//function restrictListProductsPreference(prods, restriction) {}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
			totalPrice += chosenProducts.indexOf(products[i].name).price;
	}
	return totalPrice;
}
