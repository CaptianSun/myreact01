import Ingredient from './Ingredient';

const IngredientsList = ({ingrelist})=>
    <ul className="ingredients">
            {ingrelist.map((ingre, i)=>
            <Ingredient key={i} {...ingre} />
        )}
    </ul> //IngredientsList_end

export default IngredientsList