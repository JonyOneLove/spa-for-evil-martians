import baseUrl from './Server.js'

export async function register(userData) {
  console.log(userData)
  try {
    const response = await fetch(baseUrl + 'register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    const data = await response.json()

    return data
  } catch (error) {
    alert('Ошибка при регистрации ;(')
    console.log(error)
  }
}

export async function login(userData) {
  try {
    const response = await fetch(baseUrl + 'login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    const data = await response.json()

    return data
  } catch (error) {
    alert('Ошибка при авторизации ;(')
    console.log(error)
  }
}
