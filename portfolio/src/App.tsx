import Header from "./components/Header"
import Main from "./components/Main"
import SectionDetalhes from "./components/SectionDetalhes"
import SectionFicha from "./components/SectionFicha"

function App() {
  return (
    <>
      <Header/>
      <Main>
        <SectionFicha/>
        <SectionDetalhes/>
      </Main>
    </>
  )
}

export default App
