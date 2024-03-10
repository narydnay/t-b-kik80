const { default: axios } = require("axios");
const { queryDataBase } = require("../models/models");


const test = async (req, res) => {
  try {
    const db = new queryDataBase()
    const listPrisoner = await db.getDataFromDb({nameField: 'name', qOperant: '!=', value:false});
    return res.status(200).json(listPrisoner)    
  return res.status(201).send('Hello, how our you?')
  } catch (error) {
    console.log({ error })
    return res.status(500).send('Error ' + error.message)
  }

}

module.exports = {
  test
}