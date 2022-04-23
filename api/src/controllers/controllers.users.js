const users = require('../models/User')


const createUser = async (req, res, next) => {
    
    try {
        const {userName, firstName,lastName, email, password} = req.body;
        
        const created = await users.findOrCreate({
            where: {
                userName, firstName,lastName, email, password
            }
        })

        created ? 
        res.json('El usuario se ha creado exitosamente') 
        :
        res.status(404).json('El usuario ya existe')

    } catch (error) {
        next(error)
    }
};


const deleteUsers = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await users.findByPk(id)

        if(user) {
            await user.destroy();
            res.json('El usuario ha sido eliminado') 
        } else res.status(404).send('Ha ocurrido un error')
    } catch (error) {
        next(error)
    }
};



module.exports = {
    deleteUsers,
    createUser
}