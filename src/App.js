import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {

  const data = [
    {
      id : 0,
      body: "1"
    },
    {
      id : 1,
      body: "2"
    },
    {
      id : 2,
      body: "3"
    }
  ]

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main data={data}/>} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
