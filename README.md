# Pokedex Project

Welcome to the Pokedex Project! This website is an interactive Pokédex that displays information on various Pokémon, including their types, abilities, moves, and more. This README file serves as a guide for the project, including installation instructions, usage details, and development information.

## Installation

To use the Pokedex Project, you need to first install the necessary dependencies. 

1. Clone this repository to your local machine using the following command:

```
git clone https://github.com/brysah/Pokedex.git
```

2. Navigate to the project directory using the following command:

```
cd <Pokedex>
```


## Usage

To use the Pokedex Project, you can simply open the `index.html` file in your web browser. The website is responsive and should display properly on desktop and mobile devices.

### Gulp

This project uses Gulp for automation. Gulp is a build system that automates tasks such as compiling Sass, minifying CSS and JavaScript, and optimizing images. The `gulpfile.js` file contains the Gulp tasks that are used to build the project.

To run the Gulp tasks, use the following command:

```
gulp
```

This will run the default Gulp task, which compiles Sass, minifies CSS and JavaScript, and optimizes images. 

### JavaScript

This project uses JavaScript to manipulate the data returned by the PokéAPI. 
The `script.js` file contains the JavaScript code that is used to fetch the data from the API and display it on the website.

### Axios

This project uses Axios to make HTTP requests to the PokéAPI. Axios is a promise-based HTTP client that allows us to make requests to external APIs and handle the response data in a more streamlined way.

To use Axios, simply include it in your project and use the `axios.get()` method to make GET requests to the API. The response data will be returned as a JSON object, which can be parsed and displayed on the website as needed.

## Development

If you want to contribute to the development of the Pokedex Project, there are a few things you should know:

- The project uses Sass for styling, and the Sass files are located in the `src/sass/` directory.
- The project uses Gulp for automation, and the Gulp tasks are defined in the `gulpfile.js` file.
- The project uses Axios to fetch data from the PokéAPI, and the JavaScript code that handles the API requests is located in the `/js/script.js` file.

To start developing, simply make changes to the Sass or JavaScript files and run the Gulp tasks using the `gulp` command.
