import React from 'react';
import './App.css';
import CarContainer from './CarContainer';
// import {Route, Switch} from 'react-router-dom';


// const My404 = () => {
//   return (
//     <div>
//       <h3>You are lost.</h3>
//     </div>
//   )
// }

function App() {
  return (
    <main>
      <CarContainer />
  </main>
  );
}

export default App;


// {/* <Switch>
// <Route exact path="/" component={Register} />
// <Route exact path="/cars" component={ CarContainer } />
// <Route component={ My404 } />
// </Switch> */}