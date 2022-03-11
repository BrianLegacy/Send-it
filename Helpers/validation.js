const Joi = require("joi");

// const scchema = Joi.object().keys({
//     id: Joi.string().required().id(),
//     username: Joi.string().required(),
//     fullname: Joi.string().required(),
//     phonenumber: Joi.string().min(13).max(13).required(),
//     isadmin: Joi.number().min(0).max(1).required(),
//     isdeleted: Joi.number().min(0).max(1).required(),
//     issent: Joi.number().min(0).max(1).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string().min(8).required()
// })


//  const valdlog = Joi.object().keys({
//      email: Joi.string().required().email(),
//      password: Joi.string().min(8).required()
//  })
// const valdcparcel = Joi.object().keys({
//     id: Joi.string().required().id(),
//     description: Joi.string().required(),
//     sender_number:Joi.string().min(13).max(13).required() ,
//     receiver_number: Joi.string().min(13).max(13).required(),
//     start_location: Joi.string().required(),
//     end_location: Joi.string().required(),
//     isdeleted: Joi.number().min(0).max(1).required(),
//     isupdated: Joi.number().min(0).max(1).required(),
//     issent: Joi.number().min(0).max(1).required(),
//     isdelivered: Joi.number().min(0).max(1).required(),
//     current_location: Joi.string().required(),
//     sender_id: Joi.string().required().id()
// })

//module.exports= scchema
 //module.exports= valdlog
// module.exports= valdcparcel