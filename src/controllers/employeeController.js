require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = parseInt(process.env.AUTH_ROUNDS)
const employee = require('../models').Employee;


module.exports = {
  async getEmployee(req, res, next) {
    try {
      let data = await employee.findAll({})
      return res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async createEmployee(req, res, next) {
    let { name, lastName, cellphone, email, birthday, username, TypeEmployeeId } = req.body;

    //encrypt password
    let password = bcrypt.hashSync(req.body.password, salt);
    try {
      let user = await employee.create({
        name,
        lastName,
        cellphone,
        email,
        birthday,
        username,
        password,
        TypeEmployeeId
      });
      // console.log(user.id);
      const userForToken = {
        id: user.id,
        username: user.username
      }

      const token = jwt.sign(userForToken, process.env.AUTH_SECRET, { expiresIn: process.env.AUTH_EXPIRES });
      return res.status(201).json({
        name: user.name,
        username: user.username,
        token: token
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    let { username, password } = req.body;
    try {
      let user = await employee.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ msg: "Invalid username or password" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const userForToken = {
            id: user.id,
            username: user.username
          }

          const token = jwt.sign(userForToken, process.env.AUTH_SECRET, { expiresIn: process.env.AUTH_EXPIRES });
          return res.json({
            name: user.name,
            username: user.username,
            token: token
          });

        } else {
          return res.status(401).json({ msg: 'Invalid username or password' });
        }
      }
    } catch (error) {
      next(error);
    }
  }
}