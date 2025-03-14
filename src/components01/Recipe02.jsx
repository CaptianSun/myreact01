//** Recipe를 모듈화
//=> ingredients, instructions
//=> Recipe02가 전달받은 data들을 보내줘야함
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const Recipe02 = ({name,ingredients,steps})=>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{'♡'+name+'♡'}</h1>
        <h3>재료</h3>
        <IngredientsList ingrelist={ingredients} />
        <Instructions name={name} steps={steps} />        
    </section> //Recipe02_end


export default Recipe02