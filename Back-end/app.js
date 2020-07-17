const express = require('express')
const bodyParser = require('body-parser')
const uniqid = require('uniqid');
const multer = require('multer');
const path = require('path')
const app = express()
var cors = require('cors')
app.use(cors())
const PORT  = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: true}))

// -------------------------------firebase-------------------------


var admin = require('firebase-admin');
var serviceAccount = require("./firebasekeys.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://med3d-b0ced.firebaseio.com"
});
const db = admin.firestore()
const repository = db.collection('images')


// ----------------------------middleware------------------------------

var storage = multer.diskStorage({
    destination: function (req, file, cb) {


        cb(null, 'uploads' )
    },
    filename: function (req, file, cb) {

        req.filename=uniqid() + path.extname(file.originalname)
        cb(null, req.filename)
    }
})

var upload = multer({storage: storage})


const addToDB = () => {
    return (req, res, next) => {



        repository.add(
            {
                src: req.filename,
                title: req.body.title,
                desc: req.body.desc,
            },
        );



        next()
    }

}


//-------------------------------Routes-------------------------------


app.use('/uploads', express.static(__dirname +'/uploads'));


app.post('/api/upload', upload.single('image'), addToDB(), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)

})


app.get('/api/images', async (req, res) => {

    var response = [];
    let snapshot = await repository.get();


    snapshot.forEach(doc => {

        console.log(doc.data().directory)
        if (doc.data().src) {

            response.push(doc.data())

        }
    })



    res.send(response)

})

app.get('/', async (req, res) => {



    res.send("<h3>Server is live</h3>")

})

// ------------------------------------------------------------------

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

module.exports = app;
