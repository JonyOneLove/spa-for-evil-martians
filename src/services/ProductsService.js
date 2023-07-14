import baseUrl from './Server.js'

export async function getProducts() {
  try {
    const response = await fetch(baseUrl + 'products')
    const data = await response.json()

    return data
  } catch (error) {
    alert('Error when requesting data ;(')
    console.log(error)
  }
}
