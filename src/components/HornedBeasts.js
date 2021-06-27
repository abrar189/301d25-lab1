import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        return (
            <div className='main'> 
               <h2 className='name'> {this.props.title} </h2>
               <img src={this.props.imgUrl} alt={this.props.imgUrl} className='img'></img>
               <p className='p'>{this.props.description}</p>
             </div>
            
        )
    }
}

export default HornedBeasts;