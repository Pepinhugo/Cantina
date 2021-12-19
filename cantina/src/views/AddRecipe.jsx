/*AddRecipe : Page de d'ajout d'une recette*/
/*Import des fonctionalités de "React"*/
import React from 'react';

/*Import des fonctionalités de "React" de useState à partir de react*/
import { useState, useEffect } from 'react';

/*Import des fonctionalités de "React" de useParams à partir de react-router*/
import { useParams } from 'react-router';

/*Import des fonctionalités de "axios"*/
import axios from "axios";

/*Import d'animations en react*/
import {Animated} from "react-animated-css";

/*Fonction de la page AddRecipe pour ajouter une nouvelle recette à la base de données*/
const AddRecipe = () => {

    const { id } = useParams();
    const [ingredients, setIngedient] = useState([]);
    const [etapes, setEtape] = useState([]);
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
        const newIngredient= () => {
          axios
            .post(`http://localhost:9000/api/recipe/${id}`)
            .then((ingredientData) => {
  
            setIngedient(ingredientData.data);
  
          });
      };
      newIngredient();
      }, [id]); 

      useEffect(() => { 
        const newEtape= () => {
          axios
            .post(`http://localhost:9000/api/recipe/${id}`)
            .then((etapeData) => {
  
                setEtape(etapeData.data);
  
          });
      };
      newEtape();
      }, [id]); 
    
      const handleAddIngredient = ingredient =>{

        const newIngredient = inputValue.ingredients.slice();
        newIngredient.push(ingredient);
        this.setState({ingredients});
      }

      const handleAddStape = etape =>{

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
        
    };

    const handleDelete = (id) =>{

        /*popup de confirmation avant la supression de la recette*/
        if (window.confirm('Etes-vous sûr de vouloir supprimer ?')) {
  
          const newInputValue = [...inputValue];
  
          const index = newInputValue.findIndex((inputValue) => {
    
            return inputValue.id === id; 
  
    
          });
  
          newInputValue.splice(index, 1);
          setinputValue(newInputValue);
          
        }
       };


    /*Formulaires de la page AddRecipe */
    return (
        
        <div className="formsAddRecipe "onSubmit={handleSubmit}>

        <Animated animationIn ="tada"><h1>Ajouter une recette</h1></Animated>

            <form className="form0AddRecipes">
                <label htmlFor="AddRecipes">Nouvelle recette</label>
                    <ul>
                        <li>
                            <label htmlFor="ModifRecipes">- Titre de la recette * </label>
                            <input type="text" placeholder="Le Tom Yam Kun du Jedi"onChange={handleChange}/>
                        </li>
                        <li>
                            <label htmlFor="ModifRecipes">- Petite description * </label>
                            <input type="text" placeholder="Crevettes, piments et sauce magique"onChange={handleChange}/>
                        </li>


                        <li>
                            <label htmlFor="ModifRecipes">- Photo de la recette </label>
                            <input type="url" placeholder="https://www.mesepices.com/blog/recettes/tom-yam-kung-soupe-thai-epicee-aux-crevettes.html"/>
                        </li>   
                        <li>
                            <label htmlFor="ModifRecipes">- Nombre de personne * </label>
                                <select name="Sortlist" id="nbrePersonnes"onChange={handleChange}>
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
                            <input type="text" placeholder="1h20"onChange={handleChange}/>
                        </li>
                        <li>
                            <label htmlFor="ModifRecipes">- Niveau de difficulté * </label>
                                <select name="Sortlist" id="nbrePersonnes"onChange={handleChange}>
                                            <option>padawan</option>
                                            <option>jedi</option>
                                            <option>maitre</option>
                                </select>
                        </li>
                    </ul>
                </form>

                <form className="form1AddRecipe ">
                    <label htmlFor="AddRecipes">Liste des ingrédients </label>
                    <ul>
                        <li>
                            <input type="text" placeholder="30"onChange={handleChange}/>
                                <select name="Sortlist" id="mesures"onChange={handleChange}>
                                    <option>ml</option>
                                    <option>cl</option>
                                    <option>l</option>
                                </select>
                            <input type="text" placeholder="de lait"onChange={handleChange}/> 
                            <button onDelete={handleDelete}>❌</button>   
                        </li>
                        <li>
                            <input type="text" placeholder="200"onChange={handleChange}/>
                                <select name="Sortlist" id="mesures"onChange={handleChange}>
                                    <option>mg</option>
                                    <option>cg</option>
                                    <option>g</option>
                                    <option>kg</option>
                                </select>
                            <input type="text" placeholder="de farine"onChange={handleChange}/>
                            <button onDelete={handleDelete}>❌</button>    
                        </li>
                        <li>
                            <input type="text" placeholder="1"onChange={handleChange}/>
                                <select name="Sortlist" id="mesures">
                                    <option>unité</option>
                                </select>
                            <input type="text" placeholder="zeste de citron"onChange={handleChange}/>
                            <button onDelete={handleDelete}>❌</button>   
                        </li>
                        <button onClick={handleAddIngredient}>➕ Ajouter un ingrédient</button>
                    </ul>       
                </form>

                <form className="form2AddRecipes">
                    <label htmlFor="AddRecipes">Les étapes à suivre</label>
                    <ul>
                        <li>
                            <textarea onChange={handleChange} rows="4" cols="50" placeholder="Commencez par préparer les fruits.Eplucher les bananes et à l'aide d'un couteau d'office, coupez-les en rondelles. Réservez-les."></textarea>
                            <button onDelete={handleDelete}>❌</button>    
                        </li>
                        <li>
                            <textarea onChange={handleChange} rows="4" cols="50" placeholder="Toujours à l'aide d'un couteau, épluchez les figues et coupez-les en quatre, réservez-les"></textarea>
                            <button onDelete={handleDelete}>❌</button>    
                        </li>
                        <button onClick={handleAddStape}>➕ Ajouter une étape</button>
                    </ul>
                </form>
            <button type="submit">Ajouter la recette</button>
        </div>
    );
};
/*Export de la fonction due la page AddRecipe*/
export default AddRecipe;