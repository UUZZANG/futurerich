import React from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Share from './Share.js';
import { useEffect } from "react";

<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

function Result() {   
  
  const location = useLocation();
  const navigate  = useNavigate();
  const number = location.state.value;

  const realUrl = "http://localhost:3000"

  const { Kakao } = window;

  useEffect(()=>{
    // init 해주기 전에 clean up 을 해준다.
      Kakao.cleanup();
      // 자신의 js 키를 넣어준다.
      Kakao.init('b4629ecbe5071ba0d1675efe11542053');
      // 잘 적용되면 true 를 뱉는다.
      console.log(Kakao.isInitialized());
  },[]);


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
  
  return (    

      <div className='ly-contents'>

        <div className='box-contents type-result'>

          <dl className='list-score'>
            <dt><em>{number}</em>점</dt>
            <dd>꽤 잘 아시네요?</dd>
          </dl>

          <div className='wrap-share'>
            <a className='btn-share' href='#'>문제 공유하기</a>
            <a className='btn-share' href='#'>결과 공유하기</a>
          </div>
          <div className='wrap-sharesns mt10'>
            <img className="image" alt="facebook" src="img/facebook.png" />
            <img className="image" alt="twitter" src="img/twitter.png" />
            <img className="image" alt="kakao" src="img/kakaotalk.png" onClick={shareKakao}/>
            <img className="image" alt="instagram" src="img/instagram.webp" />
          </div>

          <Link to='/Main'>
            <button className='btn-basic mt20'>다시하기</button>
          </Link>          

        </div>
     
        <div className='bg-main'>
        </div>
                
      </div>
      

  );
}

export default Result;     // <= App이 위 함수 이름 & 파일이름과 같아야함
