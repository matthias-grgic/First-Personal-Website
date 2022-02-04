import { Route, Routes } from "react-router-dom"
import Hello from "./components/hello"
import styled from "styled-components"

function App() {
    return (
        <Main>
            <div>
                <h2>Welcome</h2>
            </div>
            <Routes>
                <Route path='/' element={<Hello />} />
            </Routes>
        </Main>
    )
}

export default App

const Main = styled.div`
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
