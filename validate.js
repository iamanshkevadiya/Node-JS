const isValid = (req, res, next) => {
    let { email, username, password } = req.body;
    if (email && username && password) {
        next()
    }
    else{
        res.send("Enter valid Data");
    }
}

module.exports = isValid