import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-5: #0D6EFD;
        --primary-4: #3D8BFD;
        --primary-3: #9EC5FE;
        --primary-2: #9EC5FE;
        --primary-1: #CFE2FF;
        
        --gray-5: #000000;
        --gray-4: #798895;
        --gray-3: #A6ADB5;
        --gray-2: #E3E6EA;
        --gray-1: #FFFFFF;
    }
`

export { GlobalStyle }