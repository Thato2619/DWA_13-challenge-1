const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  //Use forEach to console.log each product name to the console.
  products.forEach(product =>  console.log(product));

  //Use filter to filter out products that have a name longer than 5 characters
  let filteredProduct = products.filter(word => word.length > 5)
  console.log(filteredProduct);

  /**
   * Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.
   */

  let mappedPrices = products.map(price => {
      if(products.price === ''){
          return parseInt(products.price)
      }
      return price

  })

  let removeProduct1 = products.pop(products.price[2]);
  let removeProduct2 = products.pop(products.price[5]);


  const sum = products.reduce((p, c) =>{
    console.log(`previous: ${p}`)
    console.log(`current: ${c}`)

    return p + c 
}, 0)

/**
 * Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea
 */

let newProduct = ['banana, mango, potato, avocado, coffee, tea']
const crew = Object.entries(
    products.reduce((a, {product}) => {
        let addedProduct = products.concat(newProduct)
        return addedProduct;
    })
)

//Using only Object.entries and reduce recreate the object with the exact same values. However, the following object keys should be changed in the new array:

let minNum = parseInt(products[0]);
let maxNum = products[4];

const totalSum = (min , max) => min + max;

console.log(products.reduce(totalSum));

const result = products.reduce((name , cost ) => {
    const name = cost.price
    if (name[name] ==  null) name[name] = []
    name [name].push(cost)
    return name
}, {})

console.log(result)