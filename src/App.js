import React from 'react';
import './styles.css';
import Header from './components/Header/index';
import Routes from './routes';


const App = () => ( 
  <div className="App">
    <Header />
    <Routes />
  </div>
);



/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello World </h1>
      </div>
    );
  }
}*/

export default App;
