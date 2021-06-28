import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: 0
        }
    }

    increaseClick = () => {
        this.setState({
            click: this.state.click + 1
        })
    }

    render() {
        return (
            <div className='main'>
               
                <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                           {this.props.description}
                         
                        </Card.Text>
                        <Card.Text>
                          
                          <p>  {this.state.click} </p>
                        </Card.Text>
                        
                        <Button  onClick={this.increaseClick} variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default HornedBeasts;