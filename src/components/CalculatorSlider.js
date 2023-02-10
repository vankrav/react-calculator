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




function CalculatorSlider() {
    // 2. Wrap ChakraProvider at the root of your app
    return (

        <Slider
            aria-label='slider-ex-3'
            defaultValue={30}
            orientation='vertical'
            minH='32'
        >
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>

    )
}


export default CalculatorSlider;



