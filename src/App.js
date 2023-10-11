import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Glory from './Glory/GloryMain';
import GloryPage from './Glory/GloryPage';
import GloryResult from './Glory/GloryResult';
import Imsolo16 from './Imsolo16/Imsolo16';
import Imsolo16Page from './Imsolo16/Imsolo16Page';
import Imsolo16Result from './Imsolo16/Imsolo16Result';


import { Link } from 'react-router-dom';
// import Result from './Result';
// import Page from './Page';
// import Share from './Share.js';
// 상단 css,img,other js import 부분으로 모든 js에 필요한 import는 js마다 각각 다 써줘야함

function App() {    // function App() { <= App이 파일이름과 같아야함
  // function안 return 밖은 프로그램(script,변수등) 영역, 주석은 javascript와 같음
  // 필요한 함수 코드 작성
  // 아직 필요한 것 없음

  // return 안쪽이 화면에 보이는 element 배치 시키는 부분
  return (    
    // ============Root element는 꼭 1개로 열고 =================//
    <BrowserRouter>
    <div className="App">  
    <div>  친구들과 함께 하는 심심풀이 퀴즈</div>
    <div   >
    <Link to="/Glory">
       <img src='/img/glory.jpg' width ='150px'/>
       <div style={{display: 'inline-block', width:'300px' , textAlign: 'center', fontSize: '20px', backgroundColor: '#ff5544'}}>  [글로리] 정주행 테스트!</div></Link>
    <Link to="/Imsolo16"> 
      <img src='/img/imsolo.jpg' width ='150px'/>
      <div style={{display: 'inline-block', width:'300px', textAlign: 'center', fontSize: '20px', backgroundColor: '#64acff'}}>  [나는 SOLO] Hot!하다 16기에서 일어난 일을 알아보자~</div></Link>
    <Link to="/Glory"><div style={{display: 'inline-block', width:'300px', textAlign: 'center', fontSize: '20px', backgroundColor: '#50e04a'}}> [무한도전] 추억속 그 장면 얼마나 기억하나욨욧?</div></Link>
    </div>
    <Routes>
        <Route path='/Glory' element={<Glory/>}/>   
        <Route path='/GloryPage' element={<GloryPage/>}/>   
        <Route path='/GloryResult' element={<GloryResult/>}/>          
        <Route path='/Imsolo16' element={<Imsolo16/>}/>   
        <Route path='/Imsolo16Page' element={<Imsolo16Page/>}/>   
        <Route path='/Imsolo16Result' element={<Imsolo16Result/>}/>                    
    </Routes> 
  

    </div>      
    </BrowserRouter>
  );
}

export default App;     // <= App이 위 함수 이름 & 파일이름과 같아야함
