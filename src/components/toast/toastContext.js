import React, { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'

const ToastContext = createContext({})
const { Provider } = ToastContext

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const add = content => {
    const id = Date.now()

    setToasts([...toasts, { id, content }])
  }
  const remove = id => setToasts(toasts.filter(t => t.id !== id))

  return (
    <Provider
      value={{
        add,
        remove,
        toasts
      }}
    >
      {children}
    </Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { ToastProvider }
export default ToastContext
