import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StateProvider } from './StateProvider.jsx'
import { initialState } from "./reducer.jsx"
import reducer from "./reducer.jsx"

createRoot(document.getElementById('root')).render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
)
