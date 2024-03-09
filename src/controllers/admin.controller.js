

const admin = async (req, res) => {
  try {
    // #swagger.description = 'open main page admin panel'
    // #swagger.path = '/'
    // #swagger.method = 'GET'
    // #swager.responses[201] = {discription: 'Success data'}

    return res.status(201).send('add async ')
  } catch (error) {
    console.log({ error })
    // #swager.responses[500] = {discription: 'Error: Server failure'}
    return res.status(500).send('Error ' + error.message)
  }

}

module.exports = {
  admin
}