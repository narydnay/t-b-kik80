
const {initializeApp} = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const { getAnalytics } = require('firebase/analytics');
const config = require('../config/config');

const fbapp = initializeApp(config.get('fb-config'));
const db = getFirestore(fbapp);

// post
const addPrisonerCustom = async (req,res) => {
  try {
    // console.log({req})
    const { first_name, last_name, surname, full_years  } = req.body;
console.log({ first_name, last_name, surname, full_years  })
    // const addPrisoner = await addDoc(collection(db, 'mybase'),{
    //   name: "Авджян Володимир Володимирович",
    //   age: "11.11.1985",
    //   image_url: '',
  
    // })
    // console.log({addPrisoner})
    // console.log({db})
    
  } catch (error) {
      console.log({error})
      return res.status(500).send('Error ' + error.message)
  }

  return res.status(200).send('add async ')
}

module.exports = {
  addPrisonerCustom


}