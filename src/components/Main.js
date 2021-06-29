import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {


    render() {
        return (
            <div>
                {
                    this.props.data.map((item, index) => {
                        return (
                            <HornedBeasts
                                title={item.title}
                                description={item.description}
                                image={item.image_url}
                                kay={index}
                                selectedCard={this.props.selectedCard}
                            />
                        )
                    })}



            </div>
        )
    }
}

export default Main;