const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");

const sequelize = require("./util/database");
const Meal = require("./models/Meals");
const User = require("./models/Users");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: "verysecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/menu", (req, res) => {
  Meal.findAll().then((meals) => {
    res.json(meals);
  });
});

app.get("/menu/:id", (req, res) => {
  const id = req.params.id;

  Meal.findByPk(id)
    .then((meal) => {
      if (!meal) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(meal);
    })
    .catch((error) => {
      res.status(500).json({ message: "Fetching item failed", error });
    });
});

app.post("/admin/add-meal", (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const itemType = req.body.itemType;

  if (!title || !price || !imageUrl || !description || !itemType) {
    return res.status(400).send({ message: "All fields are required" });
  }

  Meal.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    itemType: itemType,
  })
    .then((results) => {
      res.status(201).json({ message: "Meal created successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Creating meal failed", error });
    });
});

app.delete("/menu/:id", (req, res) => {
  const id = req.params.id;

  Meal.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(204).json({ message: "Item deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Deleting item failed", error });
    });
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    User.create({
      email: email,
      password: hashedPassword,
    }).then(() => {
      res.send("Signup Successful");
    });
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (!user) {
      res.send("User not found");
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session.userid = user.id;
          res.send("Login Successful");
        } else {
          res.send("Incorrect Password");
        }
      });
    }
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send("Error logging out");
    } else {
      res.send("Successfully logged out");
    }
  });
});

const syncDatabase = () => {
  Meal.sync()
    .then(() => {
      console.log("Meal Table created successfully");
    })
    .catch((err) => {
      console.error("Error while creating table:", err);
    });
  User.sync()
    .then(() => {
      console.log("User Table created successfully");
    })
    .catch((err) => {
      console.error("Error while creating table:", err);
    });
};

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    syncDatabase();
  })
  .catch((err) => {
    console.log(`Err: ${err}`);
  });

app.listen(3001, () => {
  console.log(`Listening on port 3001`);
});
