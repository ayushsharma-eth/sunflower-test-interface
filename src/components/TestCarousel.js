import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function TestCarousel() {

    return (
        <div>
            <Carousel>
                <Carousel.Item Interval={500}>
                    <h1>Hello</h1>
                    <Carousel.Caption>
                        <h3>This is the first card</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  Interval={500}>
                    <h1>Goodbye</h1>
                    <Carousel.Caption>
                        <h3>This is the second card</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default TestCarousel
