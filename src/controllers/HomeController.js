const connection = require("../config/connectDB");

const getHomePage = (req, res) => {
  connection.query("SELECT * FROM users", (err, results, fields) =>
    res.render("index.ejs", { dataUser: JSON.stringify(results) })
  );
};

module.exports = { getHomePage };
