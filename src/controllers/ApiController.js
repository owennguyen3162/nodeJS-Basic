const connection = require("../config/connectDB");

const getUsers = async (req, res) => {
  let conn = await connection;
  const query = "SELECT * FROM users";
  try {
    const [data] = await conn.execute(query);
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};

const getUserDetail = async (req, res) => {
  let userId = await req.params.userId;
  const conn = await connection;
  const query = `SELECT * FROM users where id = ?`;
  try {
    const [data] = await conn.execute(query, [userId]);
    if (data.length === 0) {
      return res.status(404).json({ msg: "Not found" });
    }
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};

const addNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = await req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(500).json({ error: "Empty value" });
  }
  const conn = await connection;
  const query = `INSERT INTO users VALUES (?,?,?,?,?)`;
  try {
    await conn.execute(query, [null, firstName, lastName, email, address]);
    return res.status(201).json({ msg: "created" });
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};

const editUser = async (req, res) => {
  let { firstName, lastName, email, address } = await req.body;
  let id = await req.params.userId;
  if (!firstName || !lastName || !email || !address) {
    return res.status(500).json({ error: "Empty value" });
  }
  const conn = await connection;
  const query = `UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ? `;
  try {
    const [data] = await conn.execute(query, [
      firstName,
      lastName,
      email,
      address,
      id,
    ]);
    if (data.affectedRows === 0) {
      return res.status(404).json({ msg: "not found" });
    }
    return res.status(200).json({ msg: "updated" });
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};

const deleteUser = async (req, res) => {
  let id = await req.params.userId;
  const conn = await connection;
  const query = `DELETE FROM users WHERE id = ? `;
  try {
    const [data] = await conn.execute(query, [id]);
    if (data.affectedRows === 0) {
      return res.status(404).json({ msg: "not found" });
    }
    return res.status(204).json({ msg: "Deleted" });
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};
module.exports = {
  getUsers,
  getUserDetail,
  addNewUser,
  editUser,
  deleteUser,
};
