import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}
a {
  color: var(--main-txt-color);;
        text-decoration: none;
        
    }
h1, h2, h3 ,h4 ,h5, h6 {
  font-family: 'Poppins', sans-serif; 
}

h2{
  font-size: 4rem;
}

h3{
  font-size: 3rem;
}


h4{
  font-size: 2rem;
}
`

export default GlobalStyle
