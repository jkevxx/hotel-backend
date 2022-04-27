/**
 * Token Validation
 */
require('dotenv').config();
const jwt = require('jsonwebtoken');
const employee = require('../models').Employee;

module.exports = {
  async verifyToken(req, res, next) {
    try {
      const authorization = req.get('authorization');
      if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        let token = authorization.split(' ')[1];

        let decodedToken = jwt.verify(token, process.env.AUTH_SECRET);
        // console.log(decodedToken.id);
        req.userId = decodedToken.id;

        if (!token || !decodedToken.id) {
          return res.status(401).json({ error: 'Invalid token' });
        }

        let user = await employee.findOne({ where: { id: decodedToken.id } })
        if (!user) return res.status(404).json({ error: 'User not found' });
        // console.log(user);

        next();
      }
      else {
        return res.status(401).json({ error: 'Unauthorized' })
      }
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' })
    }
  },

  async verifyAdmin(req, res, next) {
    try {
      let user = await employee.findOne({ where: { id: req.userId } });
      console.log(user.TypeEmployeeId);
      if (user.TypeEmployeeId != 1) {
        return res.status(401).json({ error: 'access denied' });
      }
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' })
    }
  },

  async verifyReceptionist(req, res, next) {
    try {
      let user = await employee.findOne({ where: { id: req.userId } });
      console.log(user.TypeEmployeeId);
      if (user.TypeEmployeeId != 2) {
        return res.status(401).json({ error: 'access denied' });
      }
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' })
    }
  },

  async verifyCleaner(req, res, next) {

  },


}