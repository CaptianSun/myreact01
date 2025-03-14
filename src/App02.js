import MyHeader from './components/Header.jsx';
import MyFooter from './components/Footer.jsx';
import Body from './components02/Body.jsx';

// ** 컴포넌트 기본사항
//=> 폴더 components02 사용
//=> JSX 문법
//=> Data 전달
//=> 리액트 프로젝트의 최상위 컴포넌트는 항상 App
//  App이 최종으로 유일한 페이지인 index.html로 전달&출력됨
//  모든 자식 컴포넌트로 props를 이용해 Data 전달이 가능함

function App() {
    // ** Data 정의 & 전달
    //=> 기본 자료형 : Body로
    //=> 객체 정의 : Header로
    let test = "Green Computer"; //Body로
    const bestDress = { //Header로
        color:"blue",
        style:"Long_Sleeveless",
        price: 9900,
        size: ['xs','small','medium','large','xl']
    } //bestDress

    return (
        <>        
        {/* <MyHeader bestDress={bestDress} /> */}
        {/*=> 펼침 연산자 적용 
        color:"blue",
        style:"Long_Sleeveless",
        price: 9900,
        size: ['xs','small','medium','large','xl']        
        */}
        <MyHeader {...bestDress} /> {/*펼침연산자를 사용할때는 ''={...}의 형태가 아니다 */}
        <Body name={test} country={'대한민국'} />         
        <MyFooter />
        </>
    );
}

export default App;
