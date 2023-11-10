import { createRoot } from 'react-dom/client'
import App from './src/App'
import Todo from './src/Todo'
const root = createRoot(document.getElementById('root'))

root.render(<App/>, <Todo/>)