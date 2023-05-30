const connection = require("../config/connectDB");

const getHomePage = async (req, res) => {
  let conn = await connection;
  const query = "SELECT * FROM users";
  try {
    const [data] = await conn.execute(query);
    return res.render("index.ejs", { dataUser: data });
  } catch (error) {
    console.log(error);
  }
};

const getUserDetail = async (req, res) => {
  let userId = await req.params.id;
  const conn = await connection;
  const query = `SELECT * FROM users where id = ?`;
  try {
    const [data] = await conn.execute(query, [userId]);
    return res.render("userDetail.ejs", { UserInfo: data });
  } catch (error) {
    console.log(error);
  }
};

const getEditUser = async (req, res) => {
  let userId = await req.params.id;
  const conn = await connection;
  const query = `SELECT * FROM users where id = ?`;
  try {
    const [data] = await conn.execute(query, [userId]);
    return res.render("editUser.ejs", { UserInfo: data });
  } catch (error) {
    console.log(error);
  }
};

const getAddUSer = async (req, res) => {
  res.render("addNew.ejs");
};

const addNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = await req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.json({ error: "Empty value" });
  }
  const conn = await connection;
  const query = `INSERT INTO users VALUES (?,?,?,?,?)`;
  try {
    await conn.execute(query, [null, firstName, lastName, email, address]);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  let { firstName, lastName, email, address } = await req.body;
  let id = await req.params.userId;
  if (!firstName || !lastName || !email || !address) {
    return res.json({ error: "Empty value" });
  }
  const conn = await connection;
  const query = `UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ? `;
  try {
    await conn.execute(query, [firstName, lastName, email, address, id]);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  let id = await req.params.userId;
  const conn = await connection;
  const query = `DELETE FROM users WHERE id = ? `;
  try {
    await conn.execute(query, [id]);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getHomePage,
  getUserDetail,
  getEditUser,
  getAddUSer,
  addNewUser,
  editUser,
  deleteUser,
};
