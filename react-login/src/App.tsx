import { Box } from '@mui/material'
import { helloWorld } from '@homehub/react-utils'
import LoginBox from './components/LoginBox'
import backgroundImg from './assets/background.png'

const App = () => {
    helloWorld()

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: '100%',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom',
                height: '90vh',
            }}
        >
            <LoginBox />
        </Box>
    )
}

export default App
