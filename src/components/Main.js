import React from 'react';
import FilterHornd from './FilterHornd';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {


    render() {
        return (
            <div>
                        <FilterHornd displayBeasts={this.props.displayBeasts} All={this.props.All}/>

                {
                    this.props.data.map((item, index) => {
                        return (
                        
                            <HornedBeasts
                                title={item.title}
                                description={item.description}
                                image={item.image_url}
                                kay={index}
                                selectedCard={this.props.selectedCard}
                                horns={this.props.data.horns}
                            />
                        )
                    })}

                

            </div>
        )
    }
}

export default Main;