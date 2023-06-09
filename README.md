Express.js: Note Taker
This application will use an Express.js back end and will save and retrieve note data from a JSON file.

User Story:

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

Acceptance Criteria:

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


  Name: note-taker,
  Version: 1.0.0,
  Main: server.js,
  Scripts: 
     Test: "echo \"Error: no test specified\" && exit 1"
  License: ISC,
  Dependencies: 
    Express: 4.16.4
  
<img width="893" alt="image" src="https://github.com/TiffanyParks/note_tracker/assets/126128634/d3b116a8-3481-4f75-9d14-52ab626aaca1">

Heroku URL: https://nameless-castle-26034.herokuapp.com/

GitHub URL: https://github.com/TiffanyParks/note_tracker.git
