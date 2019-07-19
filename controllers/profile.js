const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({
        id: id
    })
    .then(user =>{
        //console.log(user); si no encuentra por el id devuelve un [] que no es un error por eso no lo engancha el catch. Entonces hacemos un if preguntando si el array tiene largo
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(400).json('no such user');
        }
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
    handleProfileGet: handleProfileGet
}