// ** 과제 
//=> count 값이 짝수일때만 호출되어서 출력 후,
//  사라질 때 (언마운트) "Even 컴포넌트 언마운트 !!"

import { useEffect } from "react";

export default function Even () {
    
    //=> 언마운트 제어 코드 작성
    //=> useEffect 의 클린업 함수 활용
    //  -> useEffect 의 콜백함수가 return 하는 '함수'
    //  -> 컴포넌트 언마운트 직전 또는 콜백함수 재호출하기 전 자동실행됨
    
    useEffect(()=>{
        return ()=>{console.log(`** Even 컴포넌트 언마운트 **`);};
    },[]);
    //=> 두번재 인자는 [] 또는 없어도 됨
    //  count 값이 짝수인 경우에만 호출(랜더링, 마운트)되기 때문
    //  즉, 짝수/홀수가 반복되면 마운트 언마운트를 반복하게 됨

    console.log(`** Even Update !!! **`);
    return (
        <>
            <h3>** 짝수 입니다 **</h3>
        </>
    );
}