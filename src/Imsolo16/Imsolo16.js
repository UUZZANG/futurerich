import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Imsolo16() {    

  return (    
    <div className="main">  
     
      <div className='ly-main'>
          <h1><p>'나는 솔로 16기~ '</p> 흥미진진 출연진 심층분석 퀴즈! </h1>  
          <Link to="/Imsolo16Page">
            <button className='btn-basic'>Start!</button>   
          </Link>               
         
      </div>
      <div className='bg-main'></div>
      
    </div>      
  );
}

export default Imsolo16;     // <= App이 위 함수 이름 & 파일이름과 같아야함
