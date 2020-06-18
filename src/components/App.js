import React, { useContext } from 'react'
import ToastContext from './Toast/toastContext'
import ToastWrapper from './ToastWrapper'

const App = () => {
  const { add, remove, toasts } = useContext(ToastContext)
  const showToast = () => add('Toast created from child component!')

  return (
    <>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me a toast</button>
      <ToastWrapper toasts={toasts} remove={remove} />
    </>
  )
}

export default App
