import './App.css'
import CardText from './components/card-text/CardText'
import Image from './components/image/Image'
import Bulbasaur from './assets/bulbasaur.png'

function App() {
  

  return (
    <>
      <Image
        className="bulbasaur"
        src={Bulbasaur}
        alt="Bulbasaur"
        width="100px"
        height=""
      
      />
      <CardText className="" as="">Bulbasaur</CardText>
    </>
  )
}

export default App
