var express = require('express');
var app = express();
const router =  express.Router()
router.get("/", (req, res) => {
    res.send({ "message": "Hello, World!" }).status(200)
})


//Si querés que envien un archivo, Acá crea algo asi:
//router.post("/",(req,res)=>{
    //en REQ, estaria el archivo
//})


app.use(router)

app.listen(process.env.PORT||3000, function () {
    console.log('Hello World Example is running. Go To http://localhost:3000/ to look!');
  })


