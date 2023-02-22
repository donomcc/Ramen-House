Idea:

A fullstack website for a ramen restaurant.

Demonstration: https://youtu.be/pOvRNtrmRTg

Frontend:

    Clean navbar and footer that will be included in every page
    Homepage with hero image
    Contact page with Google Maps API integration
    Menu page displaying meal items with corresponding images, prices, and descriptions
    Login/Registration page for admin access with global authentication state managed by React Context

Backend:

    Database:

        Two SQL tables: User table and Meal table.
        Utilizing Sequelize as the ORM

    Endpoints:

        GET /menu to retrieve all menu items
        GET /menu/:id to retrieve a specific menu item by ID
        POST /admin/add-meal to add a new menu item
        DELETE /menu/:id to delete a menu item
        POST /register to create a new user account
        POST /login to log in as a user
        GET /logout to log out of the current user session

    Security:

        Password encryption using bcrypt
