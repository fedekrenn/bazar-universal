import json from '../../products.json'

const getProductById = (id) => {
  const findedProduct = json.products.find(product => product.id === id)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(findedProduct)
    }, 1000)
  })
}

const getProducts = (category) => {
  const listOfProducts = json.products.filter(product => product.category.toLowerCase().includes(category.toLowerCase()))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listOfProducts)
    }, 1000)
  })
}

export { getProductById, getProducts }
