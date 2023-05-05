import { useEffect } from 'react'

import api from '@monorepo-test/axios-config'

import './styles/global.css'

export function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/')

      console.log(response.data)
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center text-zinc-50 bg-zinc-900">
      <h1 className="text-xl font-bold">App</h1>
    </div>
  )
}
