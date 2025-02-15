import Header from './components/header'
import GlobalStyles from './styles'
import Cards from './components/Cards'
import { useSelector } from 'react-redux'

function App() {

  const contacts = useSelector(state=>state.contacts.value);
  return (
    <>
      <GlobalStyles />
      <Header />
      {
        ['ex',1, 4].map((item, key) =>{
          return(
            <Cards key={key} number={key+1} />
          )
        })
      }
    </>
  )
}

export default App
