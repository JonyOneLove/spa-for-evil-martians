export async function register(userData) {
  console.log(userData)
  try {
    const response = await fetch('http://localhost:8083/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
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
    const response = await fetch('http://localhost:8083/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })

    const data = await response.json()

    return data
  } catch (error) {
    alert('Ошибка при авторизации ;(')
    console.log(error)
  }
}
