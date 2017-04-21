import { MongoClient } from 'mongodb'
import { MONGO_URL } from './constants'
import languages from './data/languages'
import software from './data/software'
import companies from './data/companies'
import experience from './data/experience'
import expPoints from './data/experience-points'
import skills from './data/skills'
import honors from './data/honors'

const insertMany = (colName, docs) => db => {
  return new Promise((fulfill, reject) => {
    db.collection(colName, (err, col) => {
      if (err) {
        reject(err)
        return
      }
      col.remove({}, err => {
        if (err) {
          reject(err)
          return
        }
        col.insertMany(docs, (err, res) => {
          if (err) {
            reject(err)
            return
          }
          console.log(`Successfully inserted ${docs.length} ${colName}.`)
          fulfill(db, res)
        })
      })
    })
  })
}

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) throw err

  insertMany('languages', languages)(db)
    .then(insertMany('software', software))
    .then(insertMany('companies', companies))
    .then(insertMany('experience', experience))
    .then(insertMany('experience_points', expPoints))
    .then(insertMany('skills', skills))
    .then(insertMany('honors', honors))
    .then(db => db.close())
    .catch(err => console.log(err))
})
