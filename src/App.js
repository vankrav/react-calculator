import * as React from 'react'
import './App.css'
// 1. import `ChakraProvider` component
import {Button, Center, ChakraProvider, Box, VStack, Container, Grid, GridItem} from '@chakra-ui/react'
import CalculatorInput from "./components/CalculatorInput";
import CalculatorButtons from "./components/CalculatorButtons";
import CalculatorSlider from "./components/CalculatorSlider";


function Numbers(props) {
        const numbers = Array.from(Array(10).keys()).map(number =>
        {
            return <Button key={number} w ="40px" h = "40px" margin="4px">
                {number}
            </Button>});
    return(
        <Box display="flex" flexWrap="wrap" w="15%" >
            {numbers}
        </Box>
    )
}

function App() {

    return (

            <ChakraProvider>
                <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
                    <Numbers/>
                </Box>

            </ChakraProvider>

    )
}

export default App;