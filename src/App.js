import React from "react";
import PropTypes from "prop-types";
//import Potato from './potato';
//파일 외부에 생성한 컴포넌트는 반드시 export와 import를 해여 사용한다.

function Food ({name, picture, rating}) {
  // props 하나로 컴포넌트에서 전달한 데이터 여러개를 받을 수 있다.
    return (
    <div>
        <h2>I love {name}</h2>
        {/* // 전달받은 데이터는 다음과 같은 방식으로 사용한다. */}
        <h4>{rating}/5.0</h4>
        <img alt="" src={picture} width="300"/>
        {/* 단일 태그 셀프 클로징 잊지말자 */}

    </div>  
  );
}


/*
*map() 함수
  1. map()함수의 인자로 전달한 함수는 배열의 원소를 대상으로 실행된다.
  2. 함수가 반환한 값이 모여서 map()함수의 반환값이 된다.

  ex)))
  friends.map(function(friend) {
  //인자의 friend는 임의로 붙인 변수명, friends 배열의 원소의 값을 차례대로 받는다.
    return friend +"<3";
})
    result=>
      ['dal<3', 'mark<3', 'lynn<3', 'japan guy<3']
*/
const foodLike=[// 서버에서 데이터를 여기로 전달 받았다고 치자
  {
    id:1,//key prop이 없어서 발생하는 경고를 해결하기 위해 부여된 속성, 
    // 리액트는 Food 컴포넌트가 서로 다르다는 것을 알수가 없기때문에 key prop을 추가해줘야한다.
    name:"kimchi",
    image:'https://static.wtable.co.kr/image/production/service/recipe/2709/524c21d4-80d1-4f92-aee2-0bb6758f29e7.jpg?size=800x800'
  },
  {
    id:2,
    name:"smagiopsal",
    image:'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp'
  },
  {
    id:3,
    name:"bibimbap",
    image:'https://www.souschef.co.uk/cdn/shop/articles/dolsot-bibimbap-vegetable-main-1570px_1080x.jpg?v=1542024838'
  },
  {
    id:4,
    name:"doncasu",
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata.ygosu.com%2Feditor%2Fattach%2F20210411%2F20210411000327_uclquskm.jpg&f=1&nofb=1&ipt=2c97a41d321f9d679575e4107c18923e3f62ce98145f8c1bf8d7a4e305c60e7d'
  },
  {
    id:5,
    name:"kimbap",
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2023%2F01%2F04%2F36e5ce09411508271709517ba1595cf21.jpg&f=1&nofb=1&ipt=7355f2a104d302ef0090e4d8f8b6d5b7f6417388b8ef74899e0407f4821758b4'
  }
];

// function renderFood(dish){// foodLike의 원소를 dish 변수로 받는다.
//   return <Food name={dish.name} picture={dish.image} /> }


// 컴포넌트의 첫 글자는 모두 대문자로 작성한다.
function App() {
  // return <div className="App"/>;}
  return (
    <div>
      {/* <h1>Hello!!!!</h1> */}
    {/* props 에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호{}로 감싸야 한다. */}

    {/* {foodLike.map(dish =>
    (<Food name={dish.name} picture={dish.image} />)
    // map() 함수를 통해 foodLike 배열의 원소를 하나씩 가져와서 Food 컴포넌트의 name props로 전달. 
    // 배열이 끝날때까지 반복
  )}; */}

  {foodLike.map(dish=> (
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rationd} />
  ))};  
  {/* map()함수의 인자를 통해 함수를 전달(호출) */}
    </div>
  )
}


//prop-types 검증
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,

};


export default App;
