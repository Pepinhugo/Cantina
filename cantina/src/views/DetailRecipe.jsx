/*DetailsRecipe : Page Détaillée d'une recette (informations sur la recette recherchée)*/
/*Import des fonctionalités de "React" de useState, useEffect à partir de react*/
import React, { useState, useEffect } from "react";

/*Import des fonctionalités de "React" de useParams à partir de react-router*/
import { useParams } from 'react-router';

/*Import des fonctionalités de "axios"*/
import axios from "axios";

/*Import des fonctionalités de "React" de "Link" à partir de react-router-dom*/
import { Link } from "react-router-dom";

/*Import d'animations en react*/
import {Animated} from "react-animated-css";


/*Fonction qui permet de récupérer et afficher toutes les datas d'une {id} dans une base de données à partir d'une api, grace à axios et à une prop*/ 
const DetailRecipe = () => {


    const [recipeId, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => { 
      const recipeRes = () => {
        axios
          .get(`http://localhost:9000/api/recipe/${id}`)
          .then((listData) => {

            setRecipe(listData.data);

        });
    };
    recipeRes();
    }, [id]); 
    

    if(!recipeId) return <p>Error: Aucune recette trouvée</p>

    /*Affichage des données en HTML */
    
    return (

      <div className="DetailRecipe" id="btnUpPage">
        <ul>
          <div className="bigCard">
            <div className="cardDetailRecipe">
            <Animated animationIn ="tada"><h1><em><u>{recipeId.titre}</u></em></h1></Animated>
              <p>{recipeId.description}</p>
                    <p>{recipeId.personnes} personnes</p>
                    <p>difficulté : {recipeId.niveau}</p>
                    <p>{recipeId.tempsPreparation} minutes</p>
                    <p>{recipeId.ingredients}</p>
                    <p>{recipeId.etapes}</p>
                    <Animated animationIn ="bounce"><Link exact to ={"DetailRecipe/"+ recipeId.id}><img src={recipeId.photo} alt="img de la recette"/></Link></Animated>
                    <Link exact to ="ModifRecipe"><button>🖊 Modifier</button></Link>
            </div>  
          </div>
        </ul> 
        {/*Bouton de retour en haut de page*/}
        <a href="#btnUpPage"><button id="magicbtn"> 🔝 Haut de la page</button></a>
      </div>
    );
};

/*Export de la fonction due la page DetailRecipe*/
export default DetailRecipe;