import './App.css'
import ApartmentList from './components/ApartmentsList/ApartmentsList.jsx'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'


function App() {

  return (

    <div className='App'>

      <Navbar />

      <div className="viewport-content">

        <Sidebar />

        <ApartmentList />

      </div>
      <Footer />

    </div>
  )
}

export default App