import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Imsolo16() {    

  return (    
    <div className="question-page">  
     
      <div className='ly-main'>
          <h1><p>🤯 나는 솔로 16기 🤯</p> 핫하디 핫한 16기 분석 퀴즈! </h1>  
          <Link to="/Imsolo16Page">
            <button className='btn-basic'>Start👉</button>   
          </Link>               
         
      </div>
      
    </div>      
  );
}

export default Imsolo16;     // <= App이 위 함수 이름 & 파일이름과 같아야함
