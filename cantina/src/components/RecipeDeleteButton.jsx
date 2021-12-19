/*Composant react Recipe de la page d'accueil*/

/*Import des fonctionalités de "React" à partir d'un composant React*/
import React, {Component} from "react";

/* Class qui permet de supprimer une recette sur la page d'accueil*/ 
class RecipeDeleteButton extends Component{
    render(){

        const {recipeId, onDelete}= this.props;
            return <button onClick={() => onDelete(recipeId)}>❌Supprimer</button>
    }

}

/*Export Composant react Recipe*/
export default RecipeDeleteButton;