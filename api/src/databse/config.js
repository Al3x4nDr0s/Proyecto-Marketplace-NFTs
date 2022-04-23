const mongoose = require ('mongoose');

const dbConnection = async () => {

    try {  
        console.log(process.env.DB_CONNECTION) 
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log('database connected');
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

module.exports = { dbConnection };