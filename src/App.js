import {React, useState, useEffect} from 'react';
import Header from './componment/header/header.js';
import Contents from './componment/contents/contents.js';
import Footer from './componment/footer/footer.js';
import {firebase} from "./firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

function App() {
  const [year, setYear] = useState(2021);

  return (
    <div>
      <Header></Header>
      <Contents year={year}></Contents>
      <Footer></Footer>
      {/* <button onClick={aa}>aa</button> */}
    </div>

  );
}

export default App;