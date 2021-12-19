/*Composant react Navbar(navigation/menu) de l'application*/

/*Import des fonctionalités de "React"*/
import React from 'react';
/*Import des fonctionalités de "NavLink" à partir de "react-router-dom"*/
import { NavLink } from "react-router-dom";

/*Fonction Navbar et se qu'elle renvoie en HTML*/
const Navbar = () => {
    return (
    
        <div className="navigation">
            <NavLink exact to ="/" activeStyle={{color: 'gray'}}>Accueil</NavLink>
            <NavLink exact to ="/AddRecipe" activeStyle={{color: 'gray'}}>Ajouter une recette</NavLink>
        </div>
            
    
    );
};

/*Export Composant react Navbar(navigation/menu)*/
export default Navbar;