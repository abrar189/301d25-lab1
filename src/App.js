import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import data from './components/data.json'
import SelectedBeasts from './components/SelectedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data: data,
        show: false,
        dataModel: {}
    }
}
selectedCard = title => {
    let found = data.find(element => {
        if (element.title === title) {
            return element;
        }
    })


    this.setState(
        {
            show: true,
            dataModel: found
        }
    )
}
HandleClose = () => {
    this.setState({
        show: false,
    })
}
  render(){
    return(
      <>
      <Header />
      <Main data={this.state.data} selectedCard={this.selectedCard} />
      <Footer />
      <SelectedBeasts display={this.state.show} displayContent={this.state.dataModel} closing={this.HandleClose} />

</>
    )
  }
}

export default App;
