import { app } from './app'

const port = process.env.PORT || 3333

console.log('\n\n')

app.listen(port, () => console.log(`Server running at port ${port}.`))
