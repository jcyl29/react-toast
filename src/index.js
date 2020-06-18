import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import App from './components/App'
import { ToastProvider } from './components/Toast/toastContext'

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
)
