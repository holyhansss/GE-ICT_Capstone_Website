import { React } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainPage';
import DetailPage from './pages/detailedPage.js';
import ProposalPage from './pages/proposalPage.js';
import { getAuth } from 'firebase/auth';

function App() {
  getAuth().signOut();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} ></Route>
        <Route path='/detailpages/*' >
          <Route path=":id" element={<DetailPage />} />
        </Route>
        <Route path='/proposalpage' element={<ProposalPage/>} ></Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;