/*Home : Page d'Accueil du site*/
/*Import des fonctionalités de "React" de useState, useEffect à partir de react*/
import React, { useState, useEffect } from "react";

/*Import des fonctionalités de "axios"*/
import axios from "axios";

/*Import des fonctionalités de "React" de "Link" à partir de react-router-dom*/
import { Link } from "react-router-dom";

/*Import des composants Form et Recipe*/
import Form from "../components/Form";
import RecipeDeleteButton from "../components/RecipeDeleteButton";

/*Import d'animations en react*/
import {Animated} from "react-animated-css";

/*Fonction qui affiche les recettes présentes sur la pages d'accueil*/
const Home = () => {
 
    
  const [recipes, setRecipes] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  /*Récupération des datas d'une recette avec axios dans la base de données et affichage de ces données */
    useEffect(() => {
    axios 
      .get("http://localhost:9000/api/recipes")
      .then((list) => {
        setRecipes(list.data);

      });
    }, []); 

    const handleSearchTitle = (event) =>{
      let recipe = event.target.value;
      setSearchTitle(recipe);
    }

    /*Fonction de suppression d'une recette*/
     const handleDelete = (id) =>{

      /*popup de confirmation avant la supression de la recette*/
      if (window.confirm('Etes-vous sûr de vouloir supprimer la recette ?')) {

        const newRecipes = recipes.slice();

        const index = newRecipes.findIndex((recipe) => {
  
          return recipe.id === id; 

  
        });

        newRecipes.splice(index, 1);
          setRecipes(newRecipes);
        
      }
      axios
        .delete(`http://localhost:9000/api/recipe/${id}`)
     };

    /*Ce que retourne la fonction en HTML */
    return (
      <div className="Card" id="btnUpPage">

        <Form onChange={handleSearchTitle}/>

          <ul>
            {recipes.filter((recipe)=>{
              return recipe.titre.toLowerCase().includes(searchTitle.toLowerCase());
            })
              .map((recipe)=> (

              <li key={recipe.id}>
                <Link exact to ={"DetailRecipe/"+ recipe.id}><h1><em><u>{recipe.titre}</u></em></h1></Link>
                  <p>{recipe.description}</p>
                  <p>{recipe.personnes} personnes</p>
                  <p>difficulté : {recipe.niveau}</p>
                  <p>{recipe.tempsPreparation} minutes</p>
                  <p>{recipe.ingredients}</p>
                  <p>{recipe.etapes}</p>
                  <Animated animationIn ="zoomIn"><Link exact to ={"DetailRecipe/"+ recipe.id}><img src={recipe.photo} alt="img de la recette"/></Link></Animated>
                  <br/>
                  <Link exact to ="ModifRecipe"><button>🖊 Modifier</button></Link>

                  <RecipeDeleteButton recipeId = {recipe.id} onDelete={handleDelete}/>
                  
              </li>
            ))}
        </ul>
        {/*Bouton de retour en haut de page*/}
        <a href="#btnUpPage"><button id="magicbtn"> 🔝 Haut de la page</button></a>

      </div>
    );
};

/*Export de la fonction de la page Home*/ 
export default Home;