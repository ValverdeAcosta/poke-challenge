import './App.scss'
import { HELLO_WORLD, NEXT_ARROW, PREVIOUS_ARROW } from './common/constants/literals'
import Button from './components/UI/atoms/Button/Button'
import Text from './components/UI/atoms/Text/Text'
import List from './components/UI/molecules/List/List'

function App() {

  return (
    <>
      <Text message={HELLO_WORLD} type={"lg"} />
      <Button img={PREVIOUS_ARROW} />
      <Button img={NEXT_ARROW} />
      <List elements={[]} />
    </>
  )
}

export default App
