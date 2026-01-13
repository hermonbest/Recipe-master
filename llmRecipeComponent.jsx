import ReactMarkdown from 'react-markdown'



export function LlmRecipeComponent(props) {
    
    return ( 
        <section className="suggested-recipe-container">
            <h2>Your generated recipe:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>  
                  </section>
    )
      
}