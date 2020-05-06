PROJECT: Hack Your Repo I

In the following three weeks you are going to write a Single Page Application (SPA) that makes use of the GitHub API.

Figure 1 below shows an example of what your application will look like.

UI Example

This application does 2 things:

    It makes connection to the GitHub API and retrieves all the repositories found in the HackYourFuture account.
    It displays those repositories in an alphabetically-oreded list. When a user clicks on any of the repository names it will show more details about it.

Getting an overview

For this week you're expected to build upon pre-existing code, found in the folder homework. Here's what you'll find:
Filename 	Description
hyf.png 	Contains the HackYourFuture logo.
index.html 	The application's HTML file.
index.js 	A starter JavaScript file.
style.css 	A starter CSS file.

As you'll experience in your job, you'll be exposed to an already existing codebase. It's an essential skill to get used to doing this. But how?
A first examination

    Open index.html and examine its contents (but don't modify anything). Notice that the HTML <body> looks like this:

    <body>
      <div id="root"></div>
      <script src="./index.js"></script>
    </body>

    The <body> tag contains a single <div> to which you will need to dynamically append HTML elements through your JavaScript code in index.js.

    Open index.js. This file contains a starter set of code for you to expand. It contains the following three functions:
    Function 	Description
    fetchJSON 	Uses XMLHttpRequest to fetch JSON data from an API end point. This function uses an asynchronous callback.
    createAndAppend 	A utility function for easily creating and appending HTML elements.
    main 	Contains the start-up code for the application.

    index.js also contains a variable with the URL required for fetching information about the HYF repositories:

    const HYF_REPOS_URL =
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

    Open the index.html file in your browser. You will see an unordered list with the names of the HYF repositories.

    Review the main() function in index.js and examine how this code fetches the JSON data and calls renders the data as unordered list in the web page.

    Take a look at the API URL:

https://api.github.com/orgs/HackYourFuture/repos?per_page=100

This URL is special, as it gives us data in JSON format (Try it out in your browser!). This type of URL is also known as an endpoint, an address that we can use to send a request to in order to get data. Learn more about endpoints here.

Note the query string ?per_page=100 in the above URL. If you don't specify this query string you will only get the first 30 repositories (the default per_page is 30, which we know because it says so in the API documentation).
Week 1 Assignment

The assignment for this week is to produce a functional application that looks similar to Figure 1:

UI Example

Functionally, the application should do the following:

    Make an API call to the endpoint: https://api.github.com/orgs/HackYourFuture/repos?per_page=100
    Display the first 10 items in the HTML file (write JavaScript to add element to the DOM)
    Show feedback when an error has happened

Modify the following files:

1. index.js

    Add new functions and modify function main() as you see fit.
    Render network errors to the DOM (see Figure 2 below for an example). Do not use console.log as regular users will not see the console output. Instead, create an element that displays the error message in the DOM. Use the predefined alert-error class from style.css to style your error. It should look like this:

Error rendering

Figure 2. Rendering of network errors.

2. style.css

    Add your own CSS styling. Use style.css for all of your CSS rules to style the index.html. Make sure your UI is responsive. Try it with Chrome Developer Tools in the browser, using a mobile phone format and a tablet format, portrait and landscape.

    You are not allowed to use a CSS library such as Bootstrap.

Hints:

    To sort the list repositories use .sort() and .localeCompare().

    Use CSS media queries, percentage values and Flexbox to make the UI responsive.

    To force a 404 network error so that you can test the rendering of errors, change the URL to make an invalid GitHub request, e.g. append an x to orgs: orgsx.
