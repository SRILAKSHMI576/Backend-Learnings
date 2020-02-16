//Object property shorthand
const name = "Srilakshmi"
const age = 22

const user = {
	name,
	 age,
	location: "Bangalore"
}
console.log(user)

//Object Destructring

const products = {
	label: "Red notebook",
	price: 3,
	stock: 23432,
	salePrice: undefined,
	rating: 4.3
}
//console.log(products.label, products.stock)

// const {label: productLabel, stock, rating =5} = products
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
	console.log(type, stock, label)
}
transaction("order", products)