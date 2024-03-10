// const {initializeApp} = require('firebase/app');
// const { getFirestore, collection, addDoc, getDoc, doc, namedQuery, refEqual } = require('firebase/firestore');
// converters are used with `setDoc`, `addDoc`, and `getDoc`

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const config = require('../config/config');
fbApp = initializeApp({
  credential: cert(config.get('serviceAccount'))
});
db = getFirestore(fbApp);


class queryDataBase {
  // fbApp = initializeApp(config.get('fb-config'));


  async setData({data, nameDb}){
    try {
      await db
            .collection(nameDb)
            .doc(data.name)
            .set({
              ...data,
              dateCreate: Timestamp.fromDate(new Date()),
              dateUpdate: null,
            });
    } catch (error) {
      throw error;
    }
  }

  async getDataFromDb({nameField= 'name', qOperant='!=', value=false}){
    try {

      let results = [];
      const dbConnect = db.collection('mybase')
      // console.log(dbConnect)
      const listData = await dbConnect.where(nameField,qOperant, value ).get()
      if (listData.empty) {
        return {
          message: 'Data not find.',
        };
      }  
      listData.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        results.push(doc.data())
      });
      return results;      
    } catch (error) {
      throw error;
    }
  }

  getData(){

  }

  deleteData(){

  }

  putData(){

  }
}

module.exports = {
  queryDataBase
}