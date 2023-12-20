import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-5">
        <TextForm heading="Enter your text to analyze below"/>
      </div>
    </>
  );
}

export default App;
