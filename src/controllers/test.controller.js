const { default: axios } = require("axios");


const test = async (req, res) => {
  try {

    const listPrisoner = await axios.get('https://t-bot-kik.vercel.app/get-all-prisoners');  
    return res.status(200).json(listPrisoner.data)    
  return res.status(201).send('Hello, how our you?')
  } catch (error) {
    console.log({ error })
    return res.status(500).send('Error ' + error.message)
  }

}

module.exports = {
  test
}