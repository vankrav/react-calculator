import * as React from 'react'
import "./CalculatorButtons.css"

import {
    Box,
    Button,
    Card,
    CardBody,
    ChakraProvider,
    Grid,
    GridItem,
    Input,
    SimpleGrid,
    Slider, SliderFilledTrack, SliderThumb,
    SliderTrack,
    Text
} from '@chakra-ui/react'




function CalculatorButtons() {
    // 2. Wrap ChakraProvider at the root of your app
    return (


        <SimpleGrid columns={4} spacing={5} width={60} padding-top={5} >
                <Button width={10}>1</Button>
                <Button width={10}>2</Button>
                <Button width={10}>3</Button>
                <Button colorScheme="blue" width={10}>+</Button>
                <Button width={10}>4</Button>
                <Button width={10}>5</Button>
                <Button width={10}>6</Button>
                <Button colorScheme="blue" width={10}>-</Button>
                <Button width={10}>7</Button>
                <Button width={10}>8</Button>
                <Button width={10}>9</Button>
                <Button colorScheme="blue" width={10}>X</Button>
                <Button width={10}>0</Button>
                <Box></Box>

                <Button colorScheme="blue" width={10}>=</Button>
                <Button colorScheme="blue" width={10}>/</Button>

        </SimpleGrid>


    )
}


export default CalculatorButtons;



