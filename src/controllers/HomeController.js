const connection = require("../config/connectDB");

const getHomePage = (req, res) => {
  connection.query("SELECT * FROM users", (err, results, fields) =>
    res.render("index.ejs", { dataUser: results })
  );
};

module.exports = { getHomePage };
