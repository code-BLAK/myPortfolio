import Navbar from './assets/Navbar'
import Main from './assets/Main'
import Services from './assets/Services'
import './App.css'

function App() {
  console.log('rendering App Component...');
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
    </div>
  )
}

export default App
