import './App.css';
import  imgHome  from './Images/imageHome.svg'

function App() {
  const styling = {
    height:"450px",
    widht:"500px"
  }
  return (
    <div className='container text-center'>
      <h1>Welocme To Workout App</h1>
      <img src={imgHome} style={styling} />
    </div>

  );
}

export default App;
