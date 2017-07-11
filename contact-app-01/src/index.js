import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import createFinalStore from './store'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createFinalStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
