import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
   return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>   
          <Route path="*" element={<EmptyPage />}>
            
          </Route>    
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
