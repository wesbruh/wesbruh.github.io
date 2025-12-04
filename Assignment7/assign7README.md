# AJAX Exercise
This assignment has code already provided for it and is strictly used to show the process of AJAX with fetch.

The code may not work on github pages as the code is serverside, on local host. 

## Here is the Assignment 7 instructions instead:
Go through the reading and exercise. The solution is provided at the end, however due to increase security measures please instead reference the following solution: ajaxpets-solution.zip Download ajaxpets-solution.zip. Run the server code first. You will need NPM, node, and express installed (see Node.js - Week 9-10). i.e. "npm init, npm install express, and node server.cjs"

#### So don't turn in the code, instead include three questions you have on AJAX and this process.
___
1) In the makeRequest() function, we use .catch(console.log) to handle errors. However, this only logs the errors to the console. What would be best practice for displaying a visual indicator to the user of error messages when an AJAX request fails?

2) The makeRequest() function chains promises. If we were to refactor the code using async and await syntax, what would be the advantages/disadvantages over promising chaining?

3) Because this exercise parses the array of image paths, res.json(generateImagePaths()), what would happen if we forgot to call .json() on the response object before passing it to displayPictures(), and how does the browser handle the conversion from the raw HTTP response to a JavaScript object?

