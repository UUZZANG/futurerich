import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import questions from '../question.json';

import { useState, useRef } from 'react';

const GloryPage = ()=> {   

  const [count, setCount] = useState(0);  //질문 진행 count  
  const navigate  = useNavigate();
  
  const countRef = useRef([]);   //user가 답한 것들만  모아놓은 배열 변수
  const answerRef = useRef([]);  //문항별 정답을 모아놓은 배열 변수
  const sumRef = useRef(0); // 점수를 더해줄 int 숫자형 변수

  const choiceHandler = (selectAlpabet, answerAlpabet) =>  { 
    console.log(count,'번째 질문');   

    // 마지막에 에러 안뜨고 결과 페이지 가기 위한 체크
    if (count < 9) {
      countRef.current[count] = selectAlpabet;
      answerRef.current[count] = answerAlpabet;
      setCount(count+1)
      //console.log('넘었나요?');
    } else if(count ===9) {
      countRef.current[count] = selectAlpabet;
      answerRef.current[count] = answerAlpabet;
      
      for (let i =0; i < countRef.current.length; i++ ) {
        if (countRef.current[i] === answerRef.current[i]) {
          sumRef.current += 10;
        }
      
      }
    
      // 그래서 모아놨다가 count 계산하기
      // a) json에서 answer만 모은 배열로 하던가
      // b) answerAlpabet을 모아놓던가 (지금은 이방법)
      navigate('/GloryResult',{ state: { value: sumRef.current } });
    }
    
    
    
    // 매번 점수 + - 하는 로직 (이 경우는 현재 문항에서도 오답을 할 경우 마이너스 되는 상황 발생)
    // if (selectAlpabet === answerAlpabet) {
    //   sumRef.current += 10;
    // } else if (selectAlpabet !== answerAlpabet) {
    //   sumRef.current -= 10;
    // }
    console.log(sumRef.current,'점수');





    // 이때까지 답한 것 배열 ( )
    console.log(countRef.current);
   
   
}


  const handleBack = () =>  {   
      if (!!questions.all[count-1]){
        setCount(count-1)
      } else {
        navigate('/Main');     
      } 
	}

  return (    
      
      <div className='ly-contents'>

        <div className='box-contents'>

        {/* <div><New name={sumRef.current} /></div> */}
          {/* 현재 Question 렌더링 */}        
          <div><dl><dt>{questions.all[count].num}</dt><dd>{questions.all[count].question}</dd></dl></div>   
          
          {/* 현재 카운트 질문에 대한 Choices 렌더링 */}        
          { questions.all[count].choices.map((item) => {                                                
              return <ul className='list-anwser'> 
              <button className= {item.num === countRef.current[count]? 'btn-back':'btn-question'} onClick={ () => choiceHandler(item.num,questions.all[count].answer) }>
                {item.desc}
              </button>
                      </ul>             
          })}
        

          {/* 주관식 처리는 추후  */}
          {/* <div className='wrap-form'>
            <input className='input-basic' type='text' placeholder='4글자'></input>
            <p>( * 4글자 )</p>
          </div> */}

     
          <div className='wrap-btn'>
            {/* <Link to='/Result'> */}
            {/*<button className='btn-question' onClick={handleNext}>다음으로</button>*/}
            {/* </Link> */}
            {/* <Link to='/Main'>
            <button className='btn-back'>다시하기</button>
             </Link>   */}

            { count < 1 ? null: <button className='btn-back' onClick={handleBack}>이전으로</button> }
          </div>
         
        </div>
     
        <div className='bg-main'>
        </div>
                
      </div>
      

  );
}

export default GloryPage;  
