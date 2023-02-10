import * as React from 'react'
import './App.css'
// 1. import `ChakraProvider` component
import {Button, Center, ChakraProvider, Box, VStack, Container, Grid, GridItem} from '@chakra-ui/react'
import CalculatorInput from "./components/CalculatorInput";
import CalculatorButtons from "./components/CalculatorButtons";
import CalculatorSlider from "./components/CalculatorSlider";




function App() {

    return (

            <ChakraProvider>

                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={4}

                    padding="50px"
                    width={60}
                >
                    <GridItem rowSpan={1} colSpan={2} >
                        <CalculatorInput/>
                    </GridItem>
                    
                    <GridItem rowSpan={1} colSpan={1} >
                        <CalculatorButtons/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} >
                        <CalculatorSlider/>
                    </GridItem>


                </Grid>


            </ChakraProvider>

    )
}

export default App;