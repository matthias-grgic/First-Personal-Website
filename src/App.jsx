import { Route, Routes } from "react-router-dom"
import Navigation from "./components/pages/Navigation"
import styled from "styled-components"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {
    return (
        <Main>
            <Routes>
                <Route path='/' element={<Navigation />} />
                <Route
                    path='/about'
                    element={
                        <>
                            <Navigation flex={"HOME"} /> <About />
                        </>
                    }
                />
                <Route
                    path='/work'
                    element={
                        <>
                            <Navigation flex={"HOME"} /> <Work />
                        </>
                    }
                />
            </Routes>
            <Contact />
        </Main>
    )
}

export default App

const Main = styled.div`
    background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: auto;
`
