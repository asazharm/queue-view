import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.get('/api/', (c) => {
  return c.text('Hello Hono!')
})

export default app
