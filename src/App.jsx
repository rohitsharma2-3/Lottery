import './App.css'
import Lotry from './components/Lottery'

const App = () => {
  return (
    <>
      <Lotry n={2} winingSum={15} />
    </>
  )
}

export default App