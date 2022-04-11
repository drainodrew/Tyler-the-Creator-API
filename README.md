# Tyler-the-Creator-API

This simple API shares Tyler, the Creator's discography with its users.

The app is built with MongoDB and Express.

# Instructions for Local Manipulation

1. Clone down this repo.
2. Install dependencies.
3. Seed the database.
4. Start server link.
5. View the API through a browser or manipulate its information through apps like Postman.

## Clone Repository

git clone https://github.com/drainodrew/Tyler-the-Creator-API

## Install dependencies

npm install express mongoose node-fetch dotenv

## Seed the data

npm run seed.js

## Connect to server

npm start

## Data

The main database has all of Tyler, the Creator's studio albums. The keys are:

1. title (album name)
2. type (studio album, mixtape, single, unreleased track, feature)
3. release year
4. Date (full date, e.g. 2009-12-25)
5. album length (time)
6. songs: an array of objects, storing the song title, track number, length of the song, and lyrics to be added.

## Controller

This API allows you to 1. Post 2. Get 3. Update 4. Delete

The dataset currently lacks the lyrics for every song. Users could update that songs by adding lyrics.

The dataset also lacks all of Tyler, the Creator's singles, features, and EPs. Users could use the create function to add these to the database.

## Model

The model is comprised on a Schema that takes the key-value pairs references under "Data."

title: String,
type: String,
release_year: Number,
Date: String,
album_length: String,
songs: [{}]

## Router

The router works hand-in-hand with the controller. Below you will find the built in routes:

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
