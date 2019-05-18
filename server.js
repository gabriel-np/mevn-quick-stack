let express = require("express")
let bodyParser = require("body-parser")

let tasks = require("./routes/tasks")
let cors = require("cors")

let port = 3000

let app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api", tasks)

app.listen(port, function(){
   console.log('Server started on port ' +  port)
})
