import React from "react"
import { LlmRecipeComponent } from "./llmRecipeComponent"
import { IngredientsList } from "./Ingredients"
import getRecipeFromMistral from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")

    async function getRecipe() {
        setIsLoading(true)
        setError("")
        // Reset recipe so the old one disappears while loading the new one
        setRecipe("")
        try {
            const generatedRecipe = await getRecipeFromMistral(ingredients)
            setRecipe(generatedRecipe)
        } catch (err) {
            console.error("Error fetching recipe:", err)
            setError("Failed to generate recipe. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient && !ingredients.includes(newIngredient.trim())) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient.trim()])
        }
    }

    function removeIngredient(index) {
        setIngredients(prevIngredients => prevIngredients.filter((_, i) => i !== index))
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    ingredientsListItems={ingredients.map((ingredient, index) => (
                        <li key={ingredient}>
                            {ingredient}
                            <button
                                className="remove-btn"
                                onClick={() => removeIngredient(index)}
                                aria-label={`Remove ${ingredient}`}
                            >
                                ×
                            </button>
                        </li>
                    ))}
                     getRecipe={getRecipe}
                    isLoading={isLoading} // Pass this down to disable the button
                />
            )}

            {/* Show loading text or spinner when isLoading is true */}
            {isLoading && (
                <div className="loading-container">
                    <p>The Chef is brainstorming your recipe...</p>
                    <div className="spinner"></div>
                </div>
            )}

            {/* Show error message if there's an error */}
            {error && (
                <div className="error-container">
                    <p>{error}</p>
                    <button onClick={getRecipe} disabled={isLoading}>Retry</button>
                </div>
            )}

            {/* Only show the recipe component if we have a recipe and aren't loading */}
            {!isLoading && recipe && <LlmRecipeComponent recipe={recipe} />}
        </main>
    )
}