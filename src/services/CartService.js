import baseUrl from './Server.js'

export async function getCart() {
  try {
    const response = await fetch(baseUrl + 'cart')
    const data = await response.json()

    return data
  } catch (error) {
    alert('Error when requesting data ;(')
    console.log(error)
  }
}

export async function addToCart(product) {
  try {
    const response = await fetch(baseUrl + 'cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })

    const data = await response.json()

    return data
  } catch (error) {
    alert('Error when adding to cart')
    console.error(error)
  }
}

export async function deleteFromCart(productId) {
  try {
    const response = await fetch(baseUrl + `cart/${productId}`, {
      method: 'DELETE'
    })

    const data = await response.json()

    return data
  } catch (error) {
    alert('Error when deleting from cart')
    console.error(error)
  }
}
