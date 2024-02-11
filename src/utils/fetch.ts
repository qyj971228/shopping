export async function GET(api: string, data?: any, options?: {}) {
  const searchParams = '/?' + new URLSearchParams(data).toString()
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${api}${
    data ? searchParams : ''
  }`

  options = {
    ...options,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch data../src/utils/fetch.ts/GET')
  }
  return res.json()
}

export async function POST(api: string, data?: any, options?: {}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${api}`
  options = {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : JSON.stringify({}),
  }

  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch data../src/utils/fetch.ts/POST')
  }
  return res.json()
}
