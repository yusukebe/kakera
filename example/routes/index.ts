import { Hono } from 'hono/tiny'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from kakera!')
})

export default app
