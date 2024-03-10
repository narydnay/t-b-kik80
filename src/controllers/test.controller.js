

const test = async (req, res) => {
  try {
    return res.status(201).send('Hello, how our you?')
  } catch (error) {
    console.log({ error })
    return res.status(500).send('Error ' + error.message)
  }

}

module.exports = {
  test
}