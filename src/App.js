import React, {useState} from 'react'
import checkIcon from './assets/check.svg'
import errorIcon from './assets/error.svg'
import infoIcon from './assets/info.svg'
import warningIcon from './assets/warning.svg'
import './App.css'
import './components/toast/Toast.css'
import Toast from './components/toast/Toast'
import Button from './components/button/Button'

const BUTTON_PROPS = [
    {
        id: 1,
        type: 'success',
        className: 'success',
        label: 'Success'
    },
    {
        id: 2,
        type: 'danger',
        className: 'danger',
        label: 'Danger'
    },
    {
        id: 3,
        type: 'info',
        className: 'info',
        label: 'Info'
    },
    {
        id: 4,
        type: 'warning',
        className: 'warning',
        label: 'Warning'
    },
]

const toastTypeToDataMap = id => {
    return {
        success: {
            id,
            title: 'Success',
            description: 'This is a success toast component',
            backgroundColor: '#5cb85c',
            icon: checkIcon
        },
        danger: {
            title: 'Danger',
            description: 'This is an error toast component',
            backgroundColor: '#d9534f',
            icon: errorIcon
        },
        info: {
            title: 'Info',
            description: 'This is an info toast component',
            backgroundColor: '#5bc0de',
            icon: infoIcon
        },
        warning: {
            id,
            title: 'Warning',
            description: 'This is a warning toast component',
            backgroundColor: '#f0ad4e',
            icon: warningIcon
        }
    }
}

function App() {
    const [list, setList] = useState([])
    const [position, setPosition] = useState('Select Position')
    let [checkValue, setCheckValue] = useState(false)
    const [autoDeleteTime, setAutoDeleteTime] = useState(1000)


    const selectPosition = (event) => {
        setPosition(event.target.value || undefined)
        setList([])
    }

    const showToast = (type) => {
        const id = Math.floor((Math.random() * 100) + 1)
        setList([...list, toastTypeToDataMap(id)[type]])
    }

    const onCheckBoxChange = (e) => {
        setCheckValue(e.target.checked)
        setList([])
    }

    const onInputChange = (e) => {
        const time = parseInt(e.target.value, 10)
        setAutoDeleteTime(time)
    }

    return (
        <div className="app">
            <header className="app-header">
                <p>React Toast Component</p>
                <div className="toast-buttons">
                    {
                        BUTTON_PROPS.map(e =>
                            <Button
                                key={e.id}
                                className={`${position === 'Select Position' ? `${e.className} btn-disable` : `${e.className}`}`}
                                label={e.label}
                                handleClick={() => showToast(e.type)}
                            />
                        )
                    }
                </div>
                <div className="select">
                    <input
                        id="auto"
                        type="checkbox"
                        name="checkbox"
                        value={checkValue}
                        className={`${!checkValue ? 'disabled' : ''}`}
                        onChange={onCheckBoxChange}
                    />
                    <label htmlFor="auto">Auto Dismiss</label>
                </div>

                <div className="select">
                    <input
                        type="number"
                        min={1000}
                        name="checkbox"
                        placeholder="Dismiss time in milliseconds Ex: 3000"
                        autoComplete="false"
                        onChange={onInputChange}
                    />
                </div>
                <div className="select">
                    <select
                        name="position"
                        value={position}
                        onChange={selectPosition}
                        className="position-select"
                    >
                        <option value="">Select Position</option>
                        <option value="top-right">Top Right</option>
                        <option value="top-left">Top Left</option>
                        <option value="bottom-left">Bottom Left</option>
                        <option value="bottom-right">Bottom Right</option>
                    </select>
                </div>
                <Toast
                    toastList={list}
                    position={position}
                    autoDelete={checkValue}
                    autoDeleteTime={autoDeleteTime}
                />
            </header>
        </div>
    )
}

export default App
