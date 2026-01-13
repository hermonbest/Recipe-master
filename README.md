# Recipe Master

A delightful React application that helps you discover recipes based on the ingredients you have at home. Powered by AI, it suggests creative and delicious meals using some or all of your available ingredients.

## Features

- **Ingredient Input**: Easily add ingredients you have on hand.
- **AI-Powered Recipes**: Generates recipes using advanced AI (Meta-Llama-3-8B-Instruct via Hugging Face).
- **Dynamic UI**: Interactive interface with loading states, error handling, and recipe display.
- **Responsive Design**: Works seamlessly on different devices.
- **Markdown Rendering**: Recipes are beautifully formatted using React Markdown.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: Fast build tool and development server.
- **Hugging Face Inference**: For AI-powered recipe generation.
- **React Markdown**: To render recipe content in markdown format.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/recipe-master.git
   cd recipe-master
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up your Hugging Face API key:

   - Create a `.env` file in the root directory.
   - Add your Hugging Face API key:
     ```
     VITE_HF_API_KEY=your_api_key_here
     ```
   - **Important**: Never commit your API key to version control. Add `.env` to your `.gitignore`.

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

1. Enter ingredients you have available in the input field and click "Add ingredient".
2. Once you have a few ingredients, click "Get a recipe" to generate a recipe suggestion.
3. The AI will brainstorm and provide a recipe based on your ingredients.
4. If there's an error, you can retry the request.

## Building for Production

To build the app for production:

```
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```
npm run preview
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This app uses AI to generate recipes. While efforts are made to provide accurate and safe suggestions, always use your judgment when preparing food. Ensure ingredients are fresh and follow proper cooking guidelines.
