import './App.scss'
import { HELLO_WORLD } from './common/constants/literals'
import Text from './components/UI/atoms/Text/Text'

function App() {

  return (
    <Text message={HELLO_WORLD} type={"lg"} />
  )
}

export default App
