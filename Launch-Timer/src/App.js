import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import CountdownTimer from './components/countdownTimer/countdownTimer.component'
import Footer from './components/footer/footer.component'

function App() {
  return (
    // we want to put all the elements in here the header the countdown timer and the footer links
    <div className="App">
      <Fragment>
        <h1>WE'RE LAUNCHING SOON</h1>
        <CountdownTimer />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
