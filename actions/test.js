const {port} = require("../config");

module.exports = {
    homepage: (req, res) => {
        res.send(`nowa strona główna serwera działa na porcie ${port}`)
    }
}