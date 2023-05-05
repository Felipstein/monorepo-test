import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => res.json({ message: 'Hello World' }))

routes.post('/posts', (req, res) =>
  res.status(201).json({ message: 'New post' }),
)

export { routes }
