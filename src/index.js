const express = require("express");
const { PORT, DB_SYNC } = require("./config/server-config");
const apiRoutes = require("./routes/index");
const bodyPareser = require("body-parser");
const db = require("./models/index");

const app = express();

const setupAndStartServer = () => {

    app.use(bodyPareser.json());
    app.use(bodyPareser.urlencoded({ extended: true }));
    app.use("/api", apiRoutes);
    

    app.listen(PORT, () => {
        console.log("server started at port: ", PORT);
        if(DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
    })
}


setupAndStartServer();