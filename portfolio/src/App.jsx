import Header from "./components/Header/Header"
import Main from "./components/Main"
import SectionDetalhes from "./components/SectionDetalhes"
import SectionFicha from "./components/SectionFicha"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Header/>
      <Main>
        <SectionFicha/>
        <SectionDetalhes/>
      </Main>
      <Footer/>
    </>
  )
}

export default App
