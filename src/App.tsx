import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Dashboard from './pages/dashboard'
import Nabvbar from './components/main/navbar'

function App() {
    return (
        <div className="App">
            <Nabvbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App
