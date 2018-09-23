var promise = require('bluebird');
var options = {
    promiseLib: promise
}
var pgp = require('pg-promise')(options)
connectString = 'postgres://sakda:pgisDa45060071@202.29.52.232:5432/test';
var db = pgp(connectString);

getList = (req, res, next) => {
    db.any("SELECT * FROM userprofile")
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data,
                message: "Retrived list"
            })
        })
        .catch((err) => {
            return next(err);
        })
};

getOne = (req, res, next) => {
    db.any("SELECT * FROM userprofile WHERE id=" + req.params.id)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data,
                message: "Retrived list"
            })
        })
        .catch((err) => {
            return next(err);
        })
};
createData = (req, res, next) => {
    db.none("INSERT INTO userprofile(email_user,pass_user)VALUES(${email},${pass})", req.body)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data,
                message: "Add success"
            })
        })
        .catch((err) => {
            return next(err);
        })
};
editData = (req, res, next) => {
    db.none("UPDATE userprofile SET email_user=${email}, pass_user = ${pass} WHERE id=" + req.params.id, req.body)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data,
                message: "update success"
            })
        })
        .catch((err) => {
            return next(err);
        })
};
deleteData = (req, res, next) => {
    db.none("DELETE FROM userprofile WHERE id=" + req.params.id, req.body)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data,
                message: "deleted success"
            })
        })
        .catch((err) => {
            return next(err);
        })
};

module.exports = {
    getList: getList,
    getOne: getOne,
    createData: createData,
    editData: editData,
    deleteData: deleteData
}