

# CALCULATOR

### Request

*Faire une calculatrice avec le Cadriciel (framework) ou le langage de votre choix, mais React avec Next.js sont recommandés.
L’interface doit être réactif et convivial ainsi qu’avoir les fonctionnalités de base d’une calculatrice pour téléphone cellulaire.
Le CSS doit être adaptatif pour Web ou mobile.*

## Description

A responsive calculator app built with **Next.js**, **React**, and **Tailwind CSS**. This project demonstrates a simple calculator interface with basic arithmetic functionality, unit tests, and responsive design suitable 4 both web and mobile devices.

## Features

- **Responsive Design:** [should] Adapts to mobile and desktop screens using Tailwind CSS.
- **Basic Calculator Functionality:** [should have] Addition, subtraction, multiplication, division, clear, and delete functions.
- **Unit Testing:** [should have] Basic tests written with Jest and/or [different option here if time allows it]
- **Next.js:** React framework 4 fast performance and easy deployment.

## Demo

Check out the live demo here: [https://neoncalculator.vercel.app/](https://neoncalculator.vercel.app/)

## Start the calculator

### Prerequisites

- node.js (14+ recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/calculator.git
   cd calculator
   ```

2. Install dependencies:

    ``` bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open <http://localhost:3000>

## Steps followed to achieve above

- Create project:

    ```bash
    npx create-next-app calculator
    ```

    - Choices:

        Creating a new Next.js app in D:\Pam\School\Block_5_Internship\FractaleVision\calculator.

        Installing dependencies:
        - react
        - react-dom
        - next

        Installing devDependencies:
        - @tailwindcss/postcss 
        - tailwindcss
            ```
            -> Preferred css style, I got used to it and I like the versatility of it which make it easy for me to separate general CSS and element focus css
            ```
        - eslint
        - eslint-config-next
        - @eslint/eslintrc

            ```
            -> I prefer to have it in case needed for rule setting
            ```
- Go to project:
    ```bash
	cd calculator
    ```

- Tailwind setup:
    ```bash
	npm install -D tailwindcss postcss autoprefixer // use it 4 browser compatibility
    ```
    ``` bash
	npx tailwindcss init -p
    ```

- Configure Tailwind
    - Update styles/global.css to include:

        ``` bash
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

    - Update tailwind.config.js to scan your app and components folders and add custom neon colors:
        ``` bash
        module.exports = {
          content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
      ],
          theme: {
        extend: {
      colors: {
        "neon-green": "#39FF14",
        "neon-blue": "#1F51FF",
        "neon-pink": "#ff00de",
        "neon-purple": "#BF00FF",
        "neon-yellow": "#F4FF00",
        "neon-orange": "#FFA500",
        "neon-red": "#FF073A",
        "neon-cyan": "#00fefc",
             },    
         },
        },
        plugins: [],
        };

        ```

- Plan out project structure:
	
	I need:
    - __Components__ folder for the calculator
	- __Tests__ folder for the unit tests (recommended to be done before start coding the app, to ensure functionality)
	- __App__ folder for the "box" where the js will work in. usually containing an app and and index file
	- __Styles__ folder for the css file

- Unit tests setup

    Setting up unit tests helps define what my calculator should do (it reads very similar to a BDD testing without its "key" words):
	
	- initial value should always be 0
	- if I click on a number button, that initial value should change to the number clicked
	- if I click on an operation button, it should be added after the number button I just clicked.
	- after adding an equation (number | operation button | number | "=") the result of it should be displayed.
	-  if I click the C button, it resets the operation and shows the default value (0)
	- if I click the DEL button, it removes the last character

- Implement calculator and test until all tests pass
- Additional Configuration for Fonts and Deployment:
    - Added the Orbitron font via next/font in the layout for a consistent neon look.
    - Configured deployment settings to allow static export or use Vercel for dynamic features.

## Struggles

- Babel vs. swc configuration:

    Managing separate configurations for tests (using babel) and production (using swc) was challenging, especially to support next/font without interfering with jest tests.

- Static export issues:

    Configuring basePath and assetPrefix for GitHub Pages led to missing styles, so deploying on Vercel became the preferred method.

- Hydration errors and compatibility issues:

    Ensuring consistent rendering between server and client, particularly with fonts and dynamic imports, required multiple iterations and troubleshooting.

## Sources

1. [Create a Calculator App Using Next.js (GeeksforGeeks)](https://www.geeksforgeeks.org/create-a-calculator-app-using-next-js/)
2. [JS Arithmetic (W3Schools)](https://www.w3schools.com/js/js_arithmetic.asp)
3. [JS Comparisons (W3Schools)](https://www.w3schools.com/js/js_comparisons.asp)
4. [Adobe Color](https://color.adobe.com/)
5. [React Hydration Error Message (Next.js)](https://nextjs.org/docs/messages/react-hydration-error)
6. [Babel Font Loader Conflict (Next.js)](https://nextjs.org/docs/messages/babel-font-loader-conflict)
7. [Static Exports (Next.js)](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
8. [Setting Up Your Database (Next.js Official Tutorial)](https://nextjs.org/learn/dashboard-app/setting-up-your-database)
9. [Test Error ChatGPT](ChatGPT/testErrorChatGPT.md)

