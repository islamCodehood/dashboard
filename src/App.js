import './App.css'
import DashboardMenu from './components/dashboard-menu/dashboard-menu.component'
import Header from './components/header/header.component'
import Main from './components/main/main.component'

function App() {
    return (
        <div className="App">
            <DashboardMenu />
            <Header />
            <Main />
        </div>
    )
}

export default App
