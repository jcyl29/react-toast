import React from "react";
import Toast from "../Toast";
import './toast-wrapper.css'

const ToastWrapper = ({ toasts, remove }) => {
  return (
    <div className="toasts-wrapper">
      {toasts.map(t => (
        <Toast key={t.id} remove={() => remove(t.id)}>
          {t.content}
        </Toast>
      ))}
    </div>
  )
}

export default ToastWrapper
