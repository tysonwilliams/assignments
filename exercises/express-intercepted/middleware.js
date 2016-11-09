function makeObject(req, res, next) {
    req.object = {
        name: "Awesome Object",
        style: "Cool"
    };
    next();
};

module.exports = makeObject;