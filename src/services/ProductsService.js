export async function getProducts() {
  try {
    const response = await fetch('http://localhost:8083/products')
    const data = await response.json()

    return data
  } catch (error) {
    alert('Error when requesting data ;(')
    console.log(error)
  }
}
