import React, { Component } from 'react'

class Hjem extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="App">
                <div className="main-content-wrapper">
                    <h2>Hjem</h2>
                    <div className="grey-content-container">
                        <p>
                        Curabitur ut ipsum gravida urna sagittis auctor. Curabitur hendrerit augue sit amet cursus suscipit. Suspendisse potenti. Proin non ultricies ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>
                        Donec a fringilla sem, sit amet fermentum ante. Aenean dui sapien, ullamcorper a orci non, posuere hendrerit orci. Vivamus cursus ligula eu pretium faucibus. Pellentesque malesuada nulla ut ex convallis accumsan. Proin nec sagittis velit, vitae cursus augue. Maecenas laoreet sit amet nibh sit amet posuere.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hjem
