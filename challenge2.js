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

let 