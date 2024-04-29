import React from 'react';
import { anhnguyen, burgerWithLettuce, whiteDimSum } from '../../assets';
import { addicon } from '../../assets/index';
import './recipe.css';

interface Collection {
    name: string;
    image: string;
}

interface Recipe {
    name: string;
    image: string;
}

const groupedRecipes: Collection[] = [
    { name: 'Vegetarian', image: anhnguyen },
    { name: 'Burgers', image: burgerWithLettuce },
    { name: 'Dim Sum', image: whiteDimSum },
];

const ungroupedRecipes: Recipe[] = [
    { name: 'Tofu bowl', image: anhnguyen },
    { name: 'Tofu bowl', image: anhnguyen },
    { name: 'Tofu bowl', image: anhnguyen },
    { name: 'Cheeseburger', image: burgerWithLettuce },
    { name: 'Simple white dumplings', image: whiteDimSum },
];

const Recipe: React.FC = () => {
    return (
        <div className="recipe-page-container">
            <div className="title-container">
                <h2 className="recipe-page-container-title">Collections</h2>
                <button className="collection-add-button">
                    <img src={addicon} alt="Add sign" />
                </button>
            </div>
            <div className="recipe-grid">
                {groupedRecipes.map((collection, index) => (
                    <div key={index} className="recipe-card">
                        <div className="recipe-card-inner">
                            <img
                                src={collection.image}
                                alt={collection.name}
                                className="recipe-image"
                            />
                            <p className="recipe-name collection-name">
                                {collection.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="recipe-page-container-title">Recipes</h2>
            <div className="recipe-grid">
                {ungroupedRecipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <div className="recipe-card-inner">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="recipe-image"
                            />
                            <p className="recipe-name">{recipe.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipe;
