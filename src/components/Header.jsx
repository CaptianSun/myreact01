// ** 컴포넌트
//=> 1컴포넌트 1파일
//=> 그러므로 export default를 주로 사용한다

// ** export default
// => '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있음
// => 모듈은 크게 두 종류로 나눔
//  -> 복수의 변수, 함수가 있는 라이브러리 형태의 모듈
//  -> 개체 하나만 선언되어있는 전용모듈

//=> 부모로부터 객체 전달받기
//  -> 1) props : props={'bestDress':bestDress}
/*
export default function Header(props) {
    return (
        <header>
            <h2>** Header **</h2>
            <pre>
            <b>~~ 금주의 BestDress ~~</b> <br />
            color={props.bestDress.color}, style={props.bestDress.style}, price={props.bestDress.price} <br />
            size는 {props.bestDress.size.length}종류가 있습니다.
            </pre>
            <hr />
        </header>
    );
}
*/

//  -> 2) bestDress
// bestDress 구조분해 이전과 비교
// color={bestDress.color}, style={bestDress.style}, price={bestDress.price} <br /> 
// size는 {bestDress.size.length}종류가 있습니다. 
// export default function Header({bestDress}) {
//     const {color, style, price, size} = bestDress;
//     return (
//         <header>
//             <h2>** Header **</h2>
//             <pre>
//             <b>~~ 금주의 BestDress ~~</b> <br />

//             color={color}, style={style}, price={price} <br />
//             size는 {size.length}종류가 있습니다.
//             </pre>
//             <hr />
//         </header>
//     );
// }

//  -> 3) 펼침연산자
// => 객체를 펼침으로 보냈으므고
//  props = {
//      color:"blue",
//      style:"Long_Sleeveless",
//      price: 9900,
//      size: ['xs','small','medium','large','xl']        
//  }
//  function Header(props){
//      props.color, props.style, props.price, props.size로 적용
//  }
//
export default function Header({color, style, price, size}) {    
    return (
        <header>
            <h2>** Header **</h2>
            <pre>
            <b>~~ 금주의 BestDress ~~</b> <br />

            color={color}, style={style}, price={price} <br />
            size는 {size.length}종류가 있습니다.
            </pre>
            <hr />
        </header>
    );
}