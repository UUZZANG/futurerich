import React from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Share from './Share.js';
import { useState } from "react";
import questions from './question.json';

<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

function Result() {   
  
  const location = useLocation();
  const navigate  = useNavigate();
  const number = location.state.value;

  const realUrl = "http://localhost:3001"

  const { Kakao } = window;
  const [showAnswer, setShowAnswer] = useState(false); 

  // useEffect(()=>{
  //   // init 해주기 전에 clean up 을 해준다.
  //     Kakao.cleanup();
  //     // 자신의 js 키를 넣어준다.
  //     Kakao.init('b4629ecbe5071ba0d1675efe11542053');
  //     // 잘 적용되면 true 를 뱉는다.
  //     console.log(Kakao.isInitialized());
  // },[]);


  const shareKakao = () => {

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '글로리 점수',
            description: '내 점수',
            imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
            link: {
                mobileWebUrl: realUrl,
            },
        },
        buttons: [
            {
                title: '나도 테스트 하러가기',
                link: {
                mobileWebUrl: realUrl,
                },
            },
            ],
        },);
   }

  const shareHandler = () =>  {     
      navigate('/Share');     
  }
  
  const handleShow = () => {
    showAnswer?  setShowAnswer(false) : setShowAnswer(true);
    const resultText = document.querySelector('.list-result')
    if(resultText.classList.contains('show')){
      resultText.classList.remove('show')
    }else{
      resultText.classList.add('show')
    }
    resultText.addEventListener('click', function(){
    })
  }
  return (    

      <div className='ly-contents'>

        <div className='box-contents type-result'>

          <dl className='list-score'>
            <dt><em>{number}</em>점</dt>
            <dd>꽤 잘 아시네요?</dd>
          </dl>


          <div className='wrap-sharesns mt10'>
            <img className="image" alt="facebook" src="img/facebook.png" />
            <img className="image" alt="twitter" src="img/twitter.png" />
            <img className="image" alt="kakao" src="img/kakaotalk.png" onClick={shareKakao}/>
            <img className="image" alt="instagram" src="img/instagram.webp" />
          </div>

          <Link to='/Main'>
            <button className='btn-basic mt20'>다시하기</button>
          </Link>       
          <div className='wrap-share'>
            {/* <a className='btn-share' >문제 공유하기</a>
            <a className='btn-share' >결과 공유하기</a> */}
            <a className='btn-basic sm' onClick={handleShow}>정답 
              {showAnswer? '닫기' : '보기' }              
            </a>            
          </div>   
          <div className='list-result' onClick={handleShow}>                  
          {showAnswer? questions.all.map((item) => {     
              let answerDesc = item.choices.findIndex((v)=> v.num === item.answer);                                   
              return <div className='txt-result'> 
                        <p>{item.question}</p>
                        <b>{item.choices[answerDesc].desc}</b>
                    </div>             
          }) :null}
          </div>

        </div>
     
        <div className='bg-main'>
        </div>
                
      </div>
      

  );
}

export default Result;     // <= App이 위 함수 이름 & 파일이름과 같아야함
