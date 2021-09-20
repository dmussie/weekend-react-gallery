# Project Name

The Gallery of My Life


## Checklist

# Setup
[x] - npm install, npm run server and npm run client
[x] - upload personal images (jpeg) for project

# Base Mode
[x] - Create GET in App.jsx 
[x] - Create GalleryList component and pass in gallery data stored in App via props
[x] - Iterate over GalleryList data and make GalleryItems
[x] - Create GalleryItem.jsx component and pass GalleryItem via props
[x] - Update GalleryList with GalleryItem component and display image
[x] - Swap image w/ description on click. USE CONDITIONAL RENDERING
[x] - Display number of likes for each item, include like button
[x] - Update PUT (the like count) /gallery/like/:id
[x] - Enable gallery update upon click of like button 


## Description


For this project, I needed to understand how to utilize GET and PUT routes to not just to send data from the server to the client and vise-versa, but also to enable users to actively engage with the content on the webpage. For this project, I uploaded images into an array that also contained a description. Utilizing conditional rendering, I had to enable a click action functionality that allows a user to click directly on the image to toggle between seeing the image and reading its description. An additonal "like" button was also introduced thanks to our PUT route that displays the number of times the like button has been clicked directly under the image. This was an exercise on Axios in react and how to create components that break up code into separate files which utilize props so send data to child functions, making the code easier to navigate and ultimately reducing the risk for bugs as projects increase in size. 

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
