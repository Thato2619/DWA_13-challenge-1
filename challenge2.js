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