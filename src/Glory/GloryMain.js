import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function GloryMain() {    

  return (    
    <div className="main">  
     
      <div className='ly-main'>
          <h1><p>'더글로리'</p> 봤으면 끄덕여 ^^</h1>  
          <Link to="/GloryPage">
            <button className='btn-basic'>덕질 테스트 시작해</button>   
          </Link>               
         
      </div>
      <div className='bg-main'></div>
      
    </div>      
  );
}

export default GloryMain;     // <= App이 위 함수 이름 & 파일이름과 같아야함
