# Navon Therapy
www.navontherapy.com

## About

This is a website I build for my father-in-law's therapy practice.  It is a fairly
straightforward single page app powered by Express

## Install Instructions:
 - `git clone` the repository
 - run `npm install`
 - run `npm start` to launch the local server on port `8080`

## What's Next for this project?

 - Custom CMS

    Currently all of the content is hard coded into the jade blocks.  The goal
    is to allow the client to be fully self sufficient and manage his own content.
    To accomplish this, I plan to add a Mongo database and configure authentication
    with passport.  A single admin "user" will be sufficient, and I will build a
    UI that will allow the client to edit and manage his own content.

    Ideally, the client should be able to:

    - Edit all text content in each section
    - Add new sections to the app
    - Change the logo image
    - Reorder sections of the app
