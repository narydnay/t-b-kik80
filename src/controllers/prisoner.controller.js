// const multer = require('multer');
const { parse } = require('csv-parse/sync');
const { queryDataBase } = require('../models/models');
//{dest: './dist/'}
// const upload = multer().single('uploaded_file')


// post
const addPrisonerCustom = async (req,res) => {
  try {
    // console.log({req})
    const { first_name, last_name, surname, full_years  } = req.body;
console.log({ first_name, last_name, surname, full_years  })

   
  } catch (error) {
      console.log({error})
      return res.status(500).send('Error ' + error.message)
  }

  return res.status(200).send('add async ')
}

async function addPrisonerFile(req, res, next) {
  const db = new queryDataBase()
  /* 
    #swagger.tags = ['Prisoner']
    #swagger.method = 'POST'
    #swagger.description = 'add members from file csv to database'
    #swagger.parameters['name'] = {in:'query', description: 'name prisoner', type: 'string',required: 'true',}
    #swagger.parameters['full_age'] = {in:'query', description: 'date berth', type: 'string',required: 'true',}
    */
 // name: <string> 
 // full_age: <string> 
 // otd: <number> 
 // code_article: <string> 
 // period_punish: <string> 
 // image_url: <string> 
//  '',
// '10.07.1997',
// '11',
// '309ч1, 70ч4 (121ч1)',
// '5р.п/в'
 try {
    // upload(req, res, async function (err) {
    //   if (err instanceof multer.MulterError) {
    //     next(err)
    //   } else if (err) {
    //     next(err)
    //   }
    //   // console.log(req.file)
    //   if(Object.keys(req?.file).length){
    //     const { fieldname,originalname,encoding,mimetype,buffer,size } = req.file
    //     console.log({fieldname,originalname,encoding,mimetype,buffer,size})   
    //     const data = await parse(buffer); 
    //     for(let prisoner of data){
    //       const prisonerData = {
    //         name: prisoner[0],
    //         full_age: prisoner[1],
    //         otd: prisoner[2],
    //         code_article: prisoner[3],
    //         period_punish: prisoner[4],
    //         image_url: prisoner[0] + '{' + prisoner[1] + '}',
    //         isGuard: true
    //       }
    //       db.setData({data: prisonerData, nameDb: 'mybase'})
    //     }
    //   }
    //    // #swagger.responses[201] = { description: 'User registered successfully.' }
    //   res.status(200).json(
    //     {
    //       message: 'All data upload success',
    //     }
    //   )
    // })
  
    // res.status(201).json({message: 'ok data recive', type: typeFile})
  } catch (error) {
    res.status(500).send('file recive error')
  }
}

async function getAllPrisoner( req, res, next) {
  try {
    const db = new queryDataBase()
    const listPrisoner = await db.getDataFromDb({nameField: 'name', qOperant: '!=', value:false});
    console.log({listPrisoner})
    if(!Array.isArray(listPrisoner)){
      return res
                .status(201)
                .json({
                  info: {
                    message: listPrisoner.message,
                    status: true
                  },
                  count: 0,
                  results: []
                })
    }
return res
          .status(201)
          .json({
            info: {
              message: `Data obtain success`,
              status: true
            },
            count: listPrisoner.lengthm,
            results: listPrisoner,
          })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllPrisoner,
  addPrisonerFile,
  addPrisonerCustom,

}