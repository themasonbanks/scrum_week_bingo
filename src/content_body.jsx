import React from 'react';
import {
    Box,
    Container,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
} from '@chakra-ui/react';
import prizes from './resources/prizeList.json';
import phrases from './resources/bingoPhrases.json';


class ContentBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prize: {},
            phrase: {},
            drawnNumber: 0,
            proposedNumber: 3
        };
    }
    componentDidMount() {
        this.setState({
            prize: { ...prizes },
            phrase: { ...phrases }
        })
    };
    submitNumber = () => {
        console.log(this.state.proposedNumber)
        this.setState({
            drawnNumber: this.state.proposedNumber
        })
    }
    handlerChange = (e) => {
        this.setState({
            proposedNumber: e
        })
    }
    render() {
        const { prize, phrase, drawnNumber } = this.state;
        return (
            < div >
                <Box bg='black' w='100%' p={20} color='white' borderRadius='lg' className='cards'>
                    <p>SCRUM WEEK - THE SPRING CLEAN-ENING!</p>
                </Box>
                <Container id="container" maxW='container.xl'>
                    <NumberInput
                        id='numbers'
                        defaultValue={drawnNumber}
                        onChange={this.handlerChange}
                        min={0} max={53}
                        keepWithinRange={true}
                        clampValueOnBlur={false}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button colorScheme='teal' size='lg' onClick={this.submitNumber} >
                        Enter
                    </Button>
                    <Box bg='tomato' w='100%' p={20} color='white' borderRadius='lg' className='cards'>
                        <p>{phrase[drawnNumber]}!</p>
                        <p>it's {drawnNumber}</p>
                    </Box>
                    <Box bg='aquamarine' w='100%' p={20} color='black' borderRadius='lg' className='cards'>
                        <p>You've won:</p>
                        <p>{prize[drawnNumber]}!</p>
                    </Box>

                </Container>
            </div >
        )
    }
};

export default ContentBody