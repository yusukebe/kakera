import { dev } from 'kakera-worker/dev'
import pkg from '../package.json'

export default dev({ dependencies: pkg.dependencies })
