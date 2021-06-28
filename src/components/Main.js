import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json'

class Main extends React.Component {
    render() {
        return (
            <div>
                {
                    Data.map(item => {
                        return (
                            <HornedBeasts title={item.title} description={item.description} image={item.image_url} />
                        )
                    }
                    )

                }
            </div>
        )
    }
}

export default Main;