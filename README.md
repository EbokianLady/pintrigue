# README

# Pintrigue

Welcome to [Pintrigue](https://pintrigue.herokuapp.com/#/), a single-page clone of [Pinterest](https://www.pinterest.com/).

Pintrigue is a web application for the curious and inspired. A place where you can pin cool ideas, pictures, and projects on a virtual bulletin board. Looking for more Browse your fellow pinners and see what their interests are through the discovery
page.

## Technologies

Pintrigue uses a fullstack consisting of Ruby on Rails for the backend framework, a Postgreql database, and ES6, React and Redux for a responsive frontend UI.

## Features

### User Auth

Users can sign up, logout, and login by setting a username, email and password. Updating and editing features for their personal profile, boards and pins are private.

### Image Uploading

Users can change their profile icon to an image of their choice and upload images to their boards.

### Responsive Display

Board and Pin indexes are responsive to the window width of the browser, showing two or more columns. The pins display in a masonry format, loading top-left to right and placing images successively in the next shortest column.

### Structure

1. Upper Navbar
* Links to Discovery feed.
* When logged in: user profile link and logout button
* When logged out: signup and login links
2. Profile/Board banner
* Shows all the details of the user or board at that URL location. Adding and editing features available for authorized users
3. Board/Pin Index
* Lists all of the boards associated with a user
* Features a sample of pin images as a cover
* Shows the number of pins associated with that board
4. Pin Index
* Lists all of the pins associated with a user or board
* Shows pin title and links to external site when available
5. Discovery Feed
* Shows all the pins for all users

## Future Features
* Board and pin full CRUD
* Pin images from external sites in addition to upload
* Follow users or boards
* Save another user's pins to your board
* Discovery Feed shows relevant pins first, infinity scroll

