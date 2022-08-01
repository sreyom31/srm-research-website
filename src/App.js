/* eslint-disable prettier/prettier */
import './App.scss';
import Header from './components/Header.jsx'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents.js'
function App() {
  //  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <>
      <Header/> 
      <UpcomingEvents/>
    </>
  );
}

export default App;
