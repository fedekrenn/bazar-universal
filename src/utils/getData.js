import json from '../../products.json'

const getProductById = (id) => {
  const findedProduct = json.products.find(product => product.id === id)
  return new Promise((resolve, reject) => {
    if (findedProduct) {
      setTimeout(() => {
        resolve(findedProduct)
      }, 1000)
    } else {
      reject(new Error('No se encontró el producto'))
    }
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
