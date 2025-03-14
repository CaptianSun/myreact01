//=> 화살표 함수로 컴포넌트 작성
// { }, return 생략

const Recipe = ({name,ingredients,steps})=>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{'♡'+name+'♡'}</h1>
        <h3>재료</h3>
        <ul className="ingredients">
            {ingredients.map(({name,amount,measurement}, i)=>
            <li key={i}>{name+' '+amount+measurement}</li>
            )}
        </ul>
        <section className="instructions">
            <h3>조리방법</h3>
            {steps.map((step,i)=>
                <p key={i}>{(i+1)+'. '+step}</p>
            )}
        </section>
    </section>


export default Recipe