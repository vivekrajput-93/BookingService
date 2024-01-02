const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const apiRoutes = require("./routes/index")
const db = require("./models/index")


const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))

    app.use("/api", apiRoutes)



    app.listen(process.env.PORT, () => {
        console.log(`Server is started on ${process.env.PORT}`)
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter : true})
        }
    })
}

setupAndStartServer()