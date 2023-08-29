import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])
  const router = useRouter()

  if (router.query.category) {
    API = API + `&categoryId=${router.query.category}`
  }

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(API)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('API error')
      }
    }

    fetchData()
  }, [API])

  return products
}

export default useGetProducts
