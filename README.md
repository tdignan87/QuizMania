# QuizMania - The Fun Trivia Quiz Game!!!!
Welcome to my project. Please read through the READ ME and check out this project. If you have any questions or suggestions please let me know!.  

![Mutli Device Screenshot](https://github.com/tdignan87/QMWireframes/blob/master/Images/trivia-background.jpg)

## Contents ##

* UX
*   Project Goals
    * Target Audience Goals
    * Developer Goals
    * User Requirements and Expectations
        * Design Choices
        * Fonts
        * Colours
        * Styling
        * Images
        * Backgrounds
* Wireframes
* Features
    * Features Deployed
    * Features that will be implemented in the future
* Technologies Used
* Testing
* Bugs
* Deployment
* Credits

## UX (User Experience)
### Project Goals 
The goal of this project is to create a simple to use trivia quiz game for kids and adults. The project is aimed at families of all ages. The website needs to be appealing enough so users want to interact with the site and participate in the quiz. Minimual content is key also.

#### User Goals:
* A website that allows viewers to enjoy playing the game.
* Attractive and responsive design for all devices.
* Simple and easy to use with minimal scrolling.
* Score interaction for competing with friends or family.
* Contact us with improvements via a form.
* Functionality to chose difficulty and set number of questions.

#### User Stories

##### Mr.Stonehouse:
<em>"As a user i would like my child to be able to play this game easily."</em>

##### Amanda Black:
<em>"The key for this game is ease of use with minimal content on the page. Most trivia or quiz websites are packed with content not suitable for my tablet or mobile. This site does exactly what it's suppost to do with no annoying pop-ups". </em>

##### Josh Dignan:
<em>"As a 12 year old i like the colours of this page as they make the site look fun.It's good to play a game like this i don't need to register or download an app". </em>


#### Site Owner Goals:

* Create a fun friendly webpage that user's can use to play the trivia game.
* Ability for users to email any improvements and recommendations.
* Ability for user to select difficulty and number of questions.

## User Requirements and Expectations:

* Navigate the website using the navbar to go to different areas on the page.
* Select difficulty & number of questions and site will adjust accordingly.
* Site will display my score and add it to the top scores.
* Pop out nav appears when on tablet or mobile device.
* Form works correctly for submitting ideas to the owner.
* Answer buttons will change colours if wrong or correct answer is selected.

#### Expectations:

* Site to generate random questions and give three possible answers.
* Site to allow user to select difficulty.
* Can click answers and site will respond with correct color for wrong (red) or green (correct).
* Fully responsive design for all devices.
* Content and colours are visually appealing.

## Design Choices:

The theme of this project is a trivia quiz game, so my design choices are heavily influenced by a choice of positive colours.

##### Fonts:

I chose the font <a href="https://fonts.google.com/specimen/Bubblegum+Sans">Bubblegum Sans</a> as it looks fun and compliments the colour scheme of the game. The decision to use this font is to provide a "fun" experience for the user.

##### Colour:

I checked online at other trivia games and came across a variety of bright coloured websites and dark and dull websites. I decided to go with bright and vibrant colours as they are more appealing to kids as well as adults.

* Background Colours: #c1502e<strong> Dark orange</strong>. I Chose this as the primary colour as it looks like it will blend well with the other colours.
* Navigation Colour: #fed8b1<strong> Light Orange</strong>. I chose this secondary colour for my navbar and controls as it blends well with the dark orange.
* Container Colours: #fed8b1<strong> Light Orange</strong>. I chose this colour for my sections as it blends well with the dark orange background.
* Dropdown Menu Items: #fed8b1<strong> Light Orange</strong>. I chose this colour as it blends well with the background.
* Save Score Button: Bootstrap Success Btn <strong>Green</strong>. I chose this colour for my save score button as it easily stands out above all the other colours so the it visually stands out to the user.

##### Styling:

I use bootstrap to style my website with a responsive design. This means it was easier to set up the controls for responsive design.

##### Background:

I chose a simple dark orange background for the entire web application.

## Wireframes:
I built the wireframes for this project using Balsamiq mockups. I did a basic design for Mobile/Tablets and then a web application prior to designing the UI. I found using Balsamiq very useful as it helped me to structurally arrange the elements on my page.

You can view the wireframes here:
 <a href="https://github.com/tdignan87/QMWireframes/">Click here for Wireframes</a>

## Features:

* Sliding Navigation
* Interactive questions and answers

## Technologies Used:

### Languages:

* HTML
* CSS
* Javascript

### Scripting Languages:
* JSON

### Tools & Libraries:

* jQuery
* Git
* Bootstrap
* OpenTrivia API

## Testing:

This is the first time i have written any software using data from a API. I ensured i tested every line of code and thoroughly went through all my code in blocks to understand the log and test in the console. I have learned a great deal from doing this of how API's work, and how Javascript can collect data from them. Testing was done by myself and also by peers and fellow students.

#### Test Planning:
 Prior to doing any coding i knew i had to do the work in "blocks" to achieve my overall goal otherwise I would get overwelmed and skip core things. My wireframes helped greatly as it allowed me to pick a section and then work on that specific area until the functionality and code was all working before moving onto the next.

 In future projects i would like to automatic testing to help me debug and test my work.

 #### Test Example:


### Overall Features:

<strong>Site Responsiveness:</strong>
* Fully responsive and mobile friendly is a requirement for this prodject so i used Bootstrap as the HTML framework. I used chrome developer tools for testing the different break points. 

* <strong>Implementation:</strong> Using live server browser in VS code allowed me to work on my project in a practical way alongside the developer tools for testing different things.

*<strong>Interactive:</strong> Using JS to show and hide specific parts of the page when the user is ready to begin the quiz. This will keep everything on one page when in mobile design. This was checked using chrome developer tools.

## Bugs During Development:

### Bug:

* I could not load the choices category in the categories options dropdown. Console was logging the data from API ok but results were not showing in the dropdown.

#### Fix:

* I was not calling the category in the  function so my dropdown was not loading the API data. The category function was being called which loads the API data.

### Bug:

* Available answers is not combining properly across my four answer choices. 

#### Fix:

* <p> tags were remaining in HTML so the JS append was not populating the data correctly. The template literals should also have contained a +1 for incrementing in the Array.

### Bug:

* If statement on the play button submit was only working for one of the if statements and not all the nested statements. 

#### Fix: 

* I changed the || operator to the && operator which means all conditions in the if statements must be true. The || operator means if only one condition is true.

### Known Bugs

* Rarely the API wont load the data into the questions and answers. Seems to happen at Politics Category. 



## Deployment:

QuizMania was developed using VS code, using git and github to host the repository. When i was deploying QuizMania the following steps were made:

* Created folder on local machine for the project
* Installed GIT on Windows
* Clicked source control icon on left of VS code panel
* Created a local repository on my directory
* Opened command palette (Ctrl+Shift+P) and copied in my remote repository URL
* Did a small change then pushed to remote repository
* Checked remote repository to check it was successfully pulling in the changes.

## Closing Notes:
Creating this project has taught me a lot about how to use API data to display information on a webpage. Working with Javascript and jQuery has been good experience for me as i only have basic experience in C# desktop development. In the future i would like to extend this quiz to be able to select different genre of trivia questions.

## Credits:

* Simen Daehlin (Code Institute Mentor)
LinkedIn: <a href="https://www.linkedin.com/in/simendaehlin/">Click for LinkedIn</a>

* Code institute tutor support

* Stack Overflow

* Javascript & jQuery by Jon Duckett Book

