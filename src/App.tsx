import Header from './components/header'
import GlobalStyles from './styles'
import Cards from './components/Cards'
import { useSelector } from 'react-redux'

function App() {
  const contacts = useSelector(state=>state.contacts.value);
  {console.log(contacts)}
  return (  
    <>
      <GlobalStyles />
      <Header />
      {
        contacts.map((contacts, key)=>(
          <Cards key={key} number={key+1} data={contacts} />
        ))
      }
    </>
  )
}

export default App
