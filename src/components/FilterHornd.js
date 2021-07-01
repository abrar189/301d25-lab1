import React from 'react';
import Form from 'react-bootstrap/Form';
import data from './data.json'

class FilterHornd extends React.Component {
    filter = (event) => {
        event.preventDefault();
        let numberOfhorns = (event.target.value);
        let horndData = data;
        if (numberOfhorns) {
            horndData = data.filter((element) => {
                if (element.horns === Number(numberOfhorns)) {
                    return element;
                }
              
            })
            
            
        }
        if (event.target.value === "All") {
            this.props.displayBeasts(data);
        }
        else {

        this.props.displayBeasts(horndData);

}
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group >
                        <Form.Label>Filter a beast by number of horns </Form.Label>

                        <Form.Control as="select" onChange={this.filter} >
                            <option >select one</option>
                            <option value="All">all</option>
                            <option value="1">1</option>
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