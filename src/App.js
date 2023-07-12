import './App.css'
import DashboardMenu from './components/dashboard-menu/dashboard-menu.component'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import Main from './components/main/main.component'
import SideMenu from './components/side-menu/side-menu.component'

function App() {
    return (
        <div className="App">
            <DashboardMenu />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
