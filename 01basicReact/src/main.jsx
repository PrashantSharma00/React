import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google </a>
// )

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', targer:'_blank'},
  'Click me to visit google '
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement

    ReactElement

)
