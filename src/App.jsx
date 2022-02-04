import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import styled from "styled-components"
import About from "./components/pages/About"

function App() {
    return (
        <Main>
            <Routes>
                <Route path='/' element={<Navigation />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Main>
    )
}

export default App

const Main = styled.div`
    background-image: url("https://media0.giphy.com/media/3oKIPaGG4PDQgQDFZe/giphy.gif?cid=790b761176da5e4a137bc9c1ecbd65e70bc49a56e850aaeb&rid=giphy.gif&ct=g");
    background-size: cover;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: auto;
`
