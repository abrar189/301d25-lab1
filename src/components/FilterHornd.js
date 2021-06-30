import React from 'react';
import Form from 'react-bootstrap/Form';
import data from './data.json'

class FilterHornd extends React.Component {
    filter = (event) => {
        event.preventDefault();
        let numberOfhorns = (event.target.value);
        let horndData = data;
        if (numberOfhorns) {
            horndData = data.filter((data) => {  ;
                if (data.horns === Number(numberOfhorns) ) {
                    return data;
                }
                else {
                    data = horndData;
                }

                //     }
 
 
            })
        }

           this.props.displayBeasts(horndData);

      
    }
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Group >
                        <Form.Label>Filter a beast by number of horns </Form.Label>
                        <Form.Control as="select" onChange={this.filter} >
                            <option>Open this select menu</option>
                            <option value="1">1 </option>
                            <option value="2">2</option>
                            <option value="3"> 3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default FilterHornd;