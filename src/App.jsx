import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Featured from "./components/featured/Featured"
import Sale from "./components/sale/Sale"
import New from "./components/new/New"
import Cta from "./components/cta/Cta"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollArrow from "./components/scrollarrow/ScrollArrow"

export default function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Home/>
      <Featured/>
      <Sale/>
      <New/>
      <Cta/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </div>
  )
}