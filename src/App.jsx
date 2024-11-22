import Navbar from './assets/Navbar'
import Main from './assets/Main'
import Services from './assets/Services'
import MyStack from './assets/MyStack'
import './App.css'

function App() {
  console.log('rendering App Component...');
  return (
    <div>
      <Navbar />
      <Main />
      <MyStack />
      <Services />
    </div>
  )
}

export default App
