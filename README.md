

# CALCULATOR :calculator:

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

## Start the calculator

### Prerequisites

### Installation


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

- Plan out project structure:
	
	I need:
    - __Components__ folder for the calculator
	- __Tests__ folder for the unit tests (recommended to be done before start coding the app, to ensure functionality)
	- __Pages__ folder for the "box" where the js will work in. usually containing an app and and index file
	- __Styles__ folder for the css file

- Unit tests setup

    Setting up unit tests helps define what my calculator should do (it reads very similar to a BDD testing without its "key" words):
	
	- initial value should always be 0
	- if I click on a number button, that initial value should change to the number clicked
	- if I click on an operation button, it should be added after the number button I just clicked.
	- after adding an equation (number | operation button | number | "=") the result of it should be displayed.
	-  if I click the C button, it resets the operation and shows the default value (0)
	- if I click the DEL button, it removes the last character

