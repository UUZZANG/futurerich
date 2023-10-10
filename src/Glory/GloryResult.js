import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Share from './Share.js';
import { useState, useEffect } from "react";
import questions from '../question.json';

<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

function GloryResult() {   
  
  const location = useLocation();
  const navigate  = useNavigate();
  const number = location.state.value;

  const realUrl = "https://richrichrich.netlify.app"

  const { Kakao } = window;
  const [showAnswer, setShowAnswer] = useState(false); 

  useEffect(()=>{
    // init 해주기 전에 clean up 을 해준다.
     //Kakao.cleanup();
      // 자신의 js 키를 넣어준다.
      //Kakao.init('1d48288a27aaedef97d046118e2b65c4');
      // 잘 적용되면 true 를 뱉는다.
      //console.log(Kakao.isInitialized());
  },[]);


  const shareKakao = () => {

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '글로리 점수',
            description: '내 점수',
            imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR74ujya9pjHfT6TbeFkYua_JSu5dcEtmpbA&usqp=CAU',
            
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


  const resultMsg =() => {
    if (number > 70) {
        return '꽤 잘 아시네요?'}
    else if( number > 40){ 
      return '조금만 더 기억을~'}
    else { 
      return '팬 아님! 한번 더 보시길!'}
                       
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
            <img className="image" alt="kakao" src="img/kakaotalk.png" onClick={shareKakao} style={{cursor:'pointer'}}/>
            {/* <img className="image" alt="instagram" src="img/instagram.webp" /> */}
          </div>

          <Link to='/Glory'>
            <button className='btn-basic mt20'>다시하기</button>
          </Link>    
          <Link to='/Main'>
            <button className='btn-basic mt20'>다른 퀴즈 하기</button>
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

export default GloryResult;     // <= App이 위 함수 이름 & 파일이름과 같아야함
