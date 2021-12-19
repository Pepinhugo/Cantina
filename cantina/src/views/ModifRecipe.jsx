/*ModifRecipe : Page de modification dune recette*/
/*Import des fonctionalités de "React"*/
import React from 'react';

/*Import des fonctionalités de "React" de useState à partir de react*/
/*import { useState, useEffect } from 'react';*/

/*Import des fonctionalités de "React" de useParams à partir de react-router*/
/*import { useParams } from 'react-router';*/

/*Import des fonctionalités de "axios"*/
/*import axios from "axios";*/

/*Import d'animations en react*/
import {Animated} from "react-animated-css";

/*Fonction de la page ModifRecipe pour modifier un film de la collection (base de données)*/
const ModifRecipe= () => {

    /*const { id } = useParams();
    const [Ingredients, setChangeIngredient] = useState([]);
    const [Etapes, setChangeEtape] = useState([]);
    const [inputValue, setinputValue] = useState({
        titre: "",
        description: "",
        photo:"",
        personnes:"",
        tempsPreparation:"",
        niveau:"",
        ingredients:[],
        etapes:[]
    });

    useEffect(() => { 
        const changeIngredient= () => {
          axios
            .put(`http://localhost:9000/api/recipe/${id}`)
            .then((ingredientData) => {
  
            setChangeIngredient(ingredientData.data);
  
          });
      };
      changeIngredient();
      }, [id]); 

      useEffect(() => { 
        const changeEtape= () => {
          axios
            .put(`http://localhost:9000/api/recipe/${id}`)
            .then((etapeData) => {
  
                setChangeEtape(etapeData.data);
  
          });
      };
      changeEtape();
      }, [id]); 

    /*
      const handleChangeIngredient = ingredient =>{

        const newIngredient = inputValue.ingredients.slice();
        newIngredient.push(ingredient);
        this.setState({ingredients});
      }

      const handleChangeStape = etape =>{

        const newIngredient = inputValue.etapes.slice();
        newIngredient.push(etape);
        this.setState({etapes});
      }
      

    const handleChange = (event) =>{
        setinputValue({
            ...inputValue,
            [event.target.name]: event.target.inputValue
        })
    };


    const handleSubmit = (event) =>{
        event.preventDefault();

    };*/

    /*const handleDelete = (id) =>{

        /*popup de confirmation avant la supression de la recette*/
        /*if (window.confirm('Etes-vous sûr de vouloir supprimer ?')) {
  
          const newInputValue = [...inputValue];
  
          const index = newInputValue.findIndex((inputValue) => {
    
            return inputValue.id === id; 
  
    
          });
  
          newInputValue.splice(index, 1);
          setinputValue(newInputValue);
          
        }
       };*/

    /*Formulaires de la page ModifRecipe */
    return (
        
        <div className="formsModifRecipe">
            
            <Animated animationIn ="tada"><h1>Modifier une recette</h1></Animated>

            <form className="form0ModifRecipe">
                <label htmlFor="ModifRecipe">Nouvelle recette</label>
                    <ul>
                        <li>
                            <label htmlFor="ModifRecipes">- Titre de la recette * </label>
                            <input type="text" placeholder="Le Tom Yam Kun du Jedi"/>
                        </li>
                        <li>
                            <label htmlFor="ModifRecipes">- Petite description * </label>
                            <input type="text" placeholder="Crevettes, piments et sauce magique"/>
                        </li>


                        <li>
                            <label htmlFor="ModifRecipes">- Photo de la recette </label>
                            <input type="url" placeholder="https://www.mesepices.com/blog/recettes/tom-yam-kung-soupe-thai-epicee-aux-crevettes.html"/>
                        </li>   
                        <li>
                            <label htmlFor="ModifRecipes">- Nombre de personne * </label>
                                <select name="Sortlist" id="nbrePersonnes">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>+ de 5</option>
                                        <option>+ de 10</option>
                                </select>
                        </li>
                        <li>
                            <label htmlFor="ModifRecipes">- Temps de préparation * </label>
                            <input type="text" placeholder="1h20"/>
                        </li>
                        <li>
                            <label htmlFor="ModifRecipes">- Niveau de difficulté * </label>
                                <select name="Sortlist" id="nbrePersonnes">
                                            <option>padawan</option>
                                            <option>jedi</option>
                                            <option>maitre</option>
                                </select>
                        </li>
                    </ul>
                </form>

                <form className="form1ModifRecipe ">
                    <label htmlFor="ModifRecipe">Liste des ingrédients </label>
                    <ul>
                        <li>
                            <input type="text" placeholder="30"/>
                                <select name="Sortlist" id="mesures">
                                    <option>ml</option>
                                    <option>cl</option>
                                    <option>l</option>
                                </select>
                            <input type="text" placeholder="de lait"/> 
                            <button>❌</button>   
                        </li>
                        <li>
                            <input type="text" placeholder="200"/>
                                <select name="Sortlist" id="mesures">
                                    <option>mg</option>
                                    <option>cg</option>
                                    <option>g</option>
                                    <option>kg</option>
                                </select>
                            <input type="text" placeholder="de farine"/>
                            <button>❌</button>    
                        </li>
                        <li>
                            <input type="text" placeholder="1"/>
                                <select name="Sortlist" id="mesures">
                                    <option>unité</option>
                                </select>
                            <input type="text" placeholder="zeste de citron"/>
                            <button>❌</button>   
                        </li>
                        <button>➕ Modifier un ingrédient</button>
                    </ul>       
                </form>

                <form className="form2ModifRecipe">
                    <label htmlFor="ModifRecipe">Les étapes à suivre</label>
                    <ul>
                        <li>
                            <textarea rows="4" cols="50" placeholder="Commencez par préparer les fruits.Eplucher les bananes et à l'aide d'un couteau d'office, coupez-les en rondelles. Réservez-les."></textarea>
                            <button>❌</button>    
                        </li>
                        <li>
                            <textarea rows="4" cols="50" placeholder="Toujours à l'aide d'un couteau, épluchez les figues et coupez-les en quatre, réservez-les"></textarea>
                            <button>❌</button>    
                        </li>
                        <button>➕ Modifier une étape</button>
                    </ul>
                </form>
            <button type="submit">Modifier la recette</button>
        </div>
    );
};

/*Export de la fonction de la page ModifRecipe*/
export default ModifRecipe;