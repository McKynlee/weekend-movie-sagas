# MOVIE SAGAS

## Description

_Duration: Weekend Sprint_

This application serves as a movie gallery, to which the user can add movies, and can click on any individual movie to display all stored information for that specific movie.  

Here is a view of the four pages of questions:

![Picture Name](./public/images/FormOne.png)

![Pic name](.png)
![Selection verification](.png)
![Review Page](.png)

If a user clicks one of the movies on the home page, they will be brought to a page that displays more information about that movie (this movie information is pulled from multiple tables in the database):
![Editing previous answer](.png)

A user can click the "Add Movie" link to be taken to a form page, from which they can add a movie of their choice to the database.  When they click "Save", they will be brought back to the home page, where they will see the movie they added displayed along with all the other titles:
![Add movie form](.png)


## Installation

1. Clone this repository and open in your favorite code editor (VS Code was used for creating this app).
1. Run 'npm install' in your terminal to bring in the necessary dependencies (don't worry, I've already got a nifty .gitignore file to avoid committing and pushing the massive node_modules!).
1. Create a database on your local server (Postico was used during creation).
   1. IMPORTANT: your database needs to be named saga_movies_weekend in order to communicate with the current code.
   1. Copy all of the text in the attached database.sql module and insert + execute it into the SQL Query box of your saga_movies_weekend database.
1. You will need multiple Terminal tabs open:
    1. Run "npm run server" in one to start the server - you should see "Listening on port: 5000" when the server is successfully running.
    1. Run "npm run client" in a second terminal.  You should see "Compiled successfully!" and your browser will automatically open the App.

## Usage

1. The user will start out on the first page of the app, which displays a list of movies (Title and Movie poster image).

1. The user may click on any individual movie (on the poster or title) to be brought to a new page with a detailed view of that individual movie, including a description and its related genres (these are pulled from multiple tables in the database).

1. The user may add a new movie to the list by clicking the navigation link to 'Add Movie', which will open up a form where they can input their selected movie title, give a URL to the movie poster, enter a description of the movie, and choose a genre to represent the movie.  If they click 'cancel', the information will not be saved nor added to the movie list, and they will be taken back to the home page with all the movies displayed.  If they hit 'save' after adding their movie information, their input will be added to the home page display as well as the database, and they will be directed back to the home page.



## Built with:

- CSS
- Material-UI
- JavaScript, JSX
- React.js 
- Redux (Reducers and Sagas)
- Node.js 
- Express.js 
- JSON 
- PostgreSQL 
- SQL 
- Postico 

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) who equipped and helped me to make this application a reality.