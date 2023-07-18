const User = require('../models/User')

module.exports = {
  async storage(req, res) {
    const { name, email, password } = req.body;
    
    const user = await User.create({ name, email, password });

    return res.json(user)
  },
  async get(req, res) {
    const users = await User.findAll();

    if (users === "" || users === null) {
      return res.status(200).send({message: "Nenhum usuário cadastrado"})
    }

    return res.status(200).json(users)
  },
}

 