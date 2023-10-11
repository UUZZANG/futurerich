import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import questions from './question2.json';

<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

function Imsolo16Result() {   
  
  const location = useLocation();
  const navigate  = useNavigate();
  const number = location.state.value;

  const realUrl = "https://richrichrich.netlify.app"

  const { Kakao } = window;
  const [showAnswer, setShowAnswer] = useState(false); 

  useEffect(()=>{
      // init 해주기 전에 clean up 을 해준다.
     Kakao.cleanup();
      // 자신의 js 키를 넣어준다.
      Kakao.init('1d48288a27aaedef97d046118e2b65c4');
      // 잘 적용되면 true 를 뱉는다.
      console.log(Kakao.isInitialized());
  },[]);


  const shareKakao = () => {

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '나는솔로 16 퀴즈',
            description: '내 점수',
            imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWM92wWVlMA2EWApL8SMVlBGD1DD5JL-kaQ&usqp=CAU',
            
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


  const resultMsg =() => {
    if (number > 70) {
        return '😃 집중해서 잘 보셨네요?'}
    else if( number > 40){ 
      return '🥹 조금만 더 기억을~'}
    else { 
      return '😇 기억력이 없는데요?'}
                       
  }


  return (    

      <div className='ly-contents'>

        <div className='box-contents type-result'>

          <dl className='list-score'>
            <dt><em>{number}</em>점</dt>
            <dd>{  resultMsg()  }</dd>
          </dl>


          <div className='wrap-sharesns mt10'>
            {/* <img className="image" alt="facebook" src="img/facebook.png" />
            <img className="image" alt="twitter" src="img/twitter.png" /> */}
            <img className="image" alt="카카오톡 공유하기" src="img/kakaotalk.png" onClick={shareKakao} style={{cursor:'pointer'}}/>
            {/* <img className="image" alt="instagram" src="img/instagram.webp" /> */}
          </div>

          <div className='wrap-btn'>
            <button className='btn-basic'><Link to='/Imsolo16'>다시하기</Link></button>
            <button className='btn-basic mt10'><Link to='/Main'>다른 퀴즈 하기</Link></button>
          </div>

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

export default Imsolo16Result;     // <= App이 위 함수 이름 & 파일이름과 같아야함
