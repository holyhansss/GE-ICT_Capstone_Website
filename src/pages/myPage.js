import {React, useState, useEffect} from 'react';
import Header from '../componment/header/header.js';
import MyPageContent from '../componment/mypageContents/myPageContents';
import Footer from '../componment/footer/footer.js';
import { SEMESTERS } from '../commons/constants';

function MyPage() {
  
  return (
    <div>
        <Header></Header>
        <MyPageContent></MyPageContent>  
        <Footer></Footer>
    </div>

  );
}

export default MyPage;