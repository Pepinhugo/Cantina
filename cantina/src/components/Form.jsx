/*Composant react du formulaire de la page d'accueil*/

/*Import des fonctionalités de "React" et de "useSate" à partir de React*/
import React, {useState} from "react";

/* Fonction du formulaire de la page d'accueil*/
const Form = () => {

    const [searchRecipe, setRecipeSearched] = useState("");

    /*Fonction qui permet de récupérer les éléments qui ont été écrit dans le champ input du formulaire*/ 
    const handleSearchRecipe = (event) =>{
        const value = event.target.value;
        setRecipeSearched(value);
    };
    console.log(searchRecipe);

    /*Fonction qui permet d'envoyer les éléments qui ont été récupéré en cliquant sur un bouton de type submit*/ 
    const handleSubmit = (event) =>{
        event.preventDefault();

    };

        return  (
        
        /*Ce que retourne la Fonction du formulaire en HTML*/
        <form onSubmit={handleSubmit} className="formHome">
            <input type="text" name="search" value={searchRecipe} onChange={handleSearchRecipe} placeholder="Rechercher une recette"/>
                <select>
                    <option value="nom">Titre/Nom de la recette</option>
                    <option value="difficulté">Niveau de difficulté </option>
                    <option value="nombre">Nombre de personne</option>
                    <option value="temps">temps de préparation</option>
                </select>
            <button type="submit">🔍</button>
        </form>

        ); 
}

/*Exportation du composant Form*/
export default Form;