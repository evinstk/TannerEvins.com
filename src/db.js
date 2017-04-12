import { MongoClient } from 'mongodb'
import { MONGO_URL } from './constants'

const insertLanguages = db => {
    const docs = [
        { _id: 'js', name: 'JavaScript (ECMAScript 6)' },
        { _id: 'c', name: 'C' },
        { _id: 'cpp', name: 'C++' },
        { _id: 'csharp', name: 'C#' },
        { _id: 'python', name: 'Python' },
        { _id: 'haskell', name: 'Haskell' },
        { _id: 'scala', name: 'Scala' },
        { _id: 'clojure', name: 'Clojure' },
        { _id: 'sql', name: 'SQL' }
    ].map(lang => {
        lang.known = true
        return lang
    })

    return new Promise((fulfill, reject) => {
        db.collection('languages').insertMany(docs, (err, res) => {
            if (err) {
                reject(err)
            } else {
                console.log(`Successfully inserted ${docs.length} language documents.`)
                fulfill(db, res)
            }
        })
    })
}

const insertSoftware = db => {
    const docs = [
        { _id: 'node', name: 'Node.js' },
        { _id: 'npm', name: 'NPM' },
        { _id: 'react', name: 'React' },
        { _id: 'redux', name: 'Redux' },
        { _id: 'flux', name: 'Flux' },
        { _id: 'lodash', name: 'Lodash' },
        { _id: 'gulp', name: 'Gulp' },
        { _id: 'browserify', name: 'Browserify' },
        { _id: 'babel', name: 'Babel' },
        { _id: 'angularjs', name: 'AngularJS' },
        { _id: 'git', name: 'Git' },
        { _id: 'emacs', name: 'Emacs' },
        { _id: 'vim', name: 'Vim' },
        { _id: 'bash', name: 'Bash shell' },
        { _id: 'util', name: 'GNU/Linux utilities' },
        { _id: 'vs', name: 'Visual Studio' }
    ].map(s => {
        s.known = true
        return s
    })

    return new Promise((fulfill, reject) => {
        db.collection('software').insertMany(docs, (err, res) => {
            if (err) {
                reject(err)
            } else {
                console.log(`Successfully inserted ${docs.length} software documents.`)
                fulfill(db, res)
            }
        })
    })
}

const insertCompanies = db => {
    const docs = [
        { _id: 'ecs', name: 'ECS Federal, Inc.' },
        { _id: 'exp', name: 'Exponent Technologies' }
    ]

    return new Promise((fulfill, reject) => {
        db.collection('companies').insertMany(docs, (err, res) => {
            if (err) {
                reject(err)
            } else {
                console.log(`Successfully inserted ${docs.length} company documents.`)
                fulfill(db, res)
            }
        })
    })
}

const insertExperience = db => {
    const docs = [
        { _id: 'ecs', company: 'ecs', start: new Date(2013, 0), end: new Date(2015, 8) },
        { _id: 'exp', company: 'exp', start: new Date(2015, 8), end: null }
    ]

    return new Promise((fulfill, reject) => {
        db.collection('experience').insertMany(docs, (err, res) => {
            if (err) {
                reject(err)
            } else {
                console.log(`Successfully inserted ${docs.length} experience documents.`)
                fulfill(db, res)
            }
        })
    })
}

MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) throw err

    insertLanguages(db)
        .then(insertSoftware)
        .then(insertCompanies)
        .then(insertExperience)
        .then(db => db.close())
        .catch(err => console.log(err))
})
