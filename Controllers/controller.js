const config = require("../Config/Config");
const mssql = require('mssql');
//const validationScchema = require('../Helpers/validation');
//const validationValdlog = require('../Helpers/validation');
//const validationValdcparcel = require('../Helpers/validation');


//get users

const getusers = async (req, res) => {
    await mssql.connect(config)
  
    const result = await (new mssql.Request().execute('sp_get_users'))
    res.json(result.recordset)
    console.log(result.recordset)
  };




  //get parcels
  const getparcels = async (req, res) => {
    await mssql.connect(config)
  
    const result = await (new mssql.Request().execute('sp_get_parcels'))
    res.json(result.recordset)
    console.log(result.recordset)
  };

  //get a parcel
  const getaparcel = async (req, res) => {
    const id = req.params.id
    await mssql.connect(config)
  
    const result = await (new mssql.Request().input('id', mssql.VarChar(100), `${id}`).execute('sp_get_aparcel'))
    res.json(result.recordset)
    console.log(result.recordset)
  };
//get user parcels
const getuserparcels = async (req, res) => {
    const sender_id = req.params.id
    await mssql.connect(config)
  
    const result = await (new mssql.Request().input('sender_id', mssql.VarChar(100), `${sender_id}`).execute('sp_get_userparcels'))
    res.json(result.recordset)
    console.log(result.recordset)
  };

  //cancel parcel order
  const cancelparcel = async (req, res) => {
    await mssql.connect(config)
   const id= req.params.id
   const {isdeleted} = req.body;
    const result = await (new mssql.Request()
    .input('id', mssql.VarChar(100), `${id}`)
    .input('isdeleted', mssql.VarChar(100), `${isdeleted}`)
    .execute('sp_delete_parcel'))
    res.json('parcel deleted')
    console.log('parcel deleted')
  };

//   //delete user
//   const deleteuser = async (req, res) => {
//     await mssql.connect(config)
//    const id= req.params.id
//    const {isdeleted} = req.body;
//     const result = await (new mssql.Request()
//     .input('id', mssql.VarChar(100), `${id}`)
//     .input('isdeleted', mssql.VarChar(100), `${isdeleted}`)
//     .execute('sp_delete_user'))
//     res.json('user deleted')
//     console.log('user deleted')
//   };

//update user
const deleteuser =  async (req, res) => {
    const { id, isdeleted} = req.body;

    try {
      await mssql.connect(config)
      await mssql.connect(config);
      await (new mssql.Request()
        .input('id', mssql.VarChar(100), `${id}`)
        .input('isdeleted', mssql.INT, `${isdeleted}`)
        .execute('sp_delete_user')
        .then((result) => {
            res.json("User deleted successfully");
        }).catch((e) => {
            console.log(e);
            res.send(e);
        })
    );
  }
  catch (e) {
    console.log(e);
  }
  
  };


  //create parcel
  const createparcel = async (req, res) => {
    const { id, description, sender_number, receiver_number, start_location, end_location, isdeleted, isupdated, issent, isdelivered, current_location, sender_id} = req.body;
    // const {error} = validationValdcparcel.validate(req.body);
    // if(error)
    // return res
    //      .status(400)
    //      .send({success: false, message: error.details[0].message});


    try {
      await mssql.connect(config)
      await mssql.connect(config);
      await (new mssql.Request()
        .input('id', mssql.VarChar(100), `${id}`)
        .input('description', mssql.VarChar(100), `${description}`)
        .input('sender_number', mssql.VarChar(13), `${sender_number}`)
        .input('receiver_number', mssql.VarChar(13), `${receiver_number}`)
        .input('start_location', mssql.VarChar(100), `${start_location}`)
        .input('end_location', mssql.VarChar(100), `${end_location}`)
        .input('isdeleted', mssql.INT, `${isdeleted}`)
        .input('isupdated', mssql.INT, `${isupdated}`)
        .input('issent', mssql.INT, `${issent}`)
        .input('isdelivered', mssql.INT, `${isdelivered}`)
        .input('current_location', mssql.VarChar(100), `${current_location}`)
        .input('sender_id', mssql.VarChar(100), `${sender_id}`)
  
        .execute('sp_create_parcel')
        .then((result) => {
            res.json("Parcel created successfully");
        }).catch((e) => {
            console.log(e);
            res.send(e);
        })
    );
  }
  catch (e) {
    console.log(e);
  }
  
  };


//create user
  const createuser =  async (req, res) => {
    const { id, username, fullname, phonenumber, email, password, isadmin, isdeleted, issent} = req.body;
   
    // const {error} = validationScchema.validate(req.body);
    // if(error)
    // return res
    //      .status(400)
    //      .send({success: false, message: error.details[0].message});


    try {
      await mssql.connect(config)
      await mssql.connect(config);
      await (new mssql.Request()
        .input('id', mssql.VarChar(100), `${id}`)
        .input('username', mssql.VarChar(100), `${username}`)
        .input('fullname', mssql.VarChar(100), `${fullname}`)
        .input('phonenumber', mssql.VarChar(13), `${phonenumber}`)
        .input('email', mssql.VarChar(100), `${email}`)
        .input('password', mssql.VarChar(50), `${password}`)
        .input('isadmin', mssql.INT, `${isadmin}`)
        .input('isdeleted', mssql.INT, `${isdeleted}`)
        .input('issent', mssql.INT, `${issent}`)
        .execute('sp_create_users')
        .then((result) => {
            res.json("User created successfully");
        }).catch((e) => {
            console.log(e);
            res.send(e);
        })
    );
  }
  catch (e) {
    console.log(e);
  }
  
  };

  //log in/get a user
    const login = async (req, res) => {
    //const id = req.params.id
    const {email, password} = req.body;
    const {error} = validationValdlog.validate(req.body);
    if(error)
    return res
         .status(400)
         .send({success: false, message: error.details[0].message});

    try{
    await mssql.connect(config)
  
    const result = await (new mssql.Request()
    .input('email', mssql.VarChar(100), `${email}`)
    .execute('sp_get_auser').then((result) =>
    {
        if (result.recordset.length > 0) {
            if (password === result.recordset[0].password) {
                res.status(200).send(result.recordset);
            } else {
                throw new Error("incorrect password");
            }
        }
            else {
                throw new Error("invalid email");
            }
        
    }).catch((err)=>{
        res.send(err.message);
    })
    );
}
catch (e){
    console.log(e);
    res.send(e);
 }
};

//update user
const updateeuser =  async (req, res) => {
    const { id, username, fullname, phonenumber, email, password, isadmin, isdeleted, issent} = req.body;

    try {
      await mssql.connect(config)
      await mssql.connect(config);
      await (new mssql.Request()
        .input('id', mssql.VarChar(100), `${id}`)
        .input('username', mssql.VarChar(100), `${username}`)
        .input('fullname', mssql.VarChar(100), `${fullname}`)
        .input('phonenumber', mssql.VarChar(13), `${phonenumber}`)
        .input('email', mssql.VarChar(100), `${email}`)
        .input('password', mssql.VarChar(50), `${password}`)
        .input('isadmin', mssql.INT, `${isadmin}`)
        .input('isdeleted', mssql.INT, `${isdeleted}`)
        .input('issent', mssql.INT, `${issent}`)
        .execute('sp_update_user')
        .then((result) => {
            res.json("User updated successfully");
        }).catch((e) => {
            console.log(e);
            res.send(e);
        })
    );
  }
  catch (e) {
    console.log(e);
  }
  
  };

  //updateparcel
  const updateparcel = async (req, res) => {
    const { id, description, sender_number, receiver_number, start_location, end_location, isdeleted, isupdated, issent, isdelivered, current_location, sender_id} = req.body;
    // const {error} = validationValdcparcel.validate(req.body);
    // if(error)
    // return res
    //      .status(400)
    //      .send({success: false, message: error.details[0].message});


    try {
      await mssql.connect(config)
      await mssql.connect(config);
      await (new mssql.Request()
        .input('id', mssql.VarChar(100), `${id}`)
        .input('description', mssql.VarChar(100), `${description}`)
        .input('sender_number', mssql.VarChar(13), `${sender_number}`)
        .input('receiver_number', mssql.VarChar(13), `${receiver_number}`)
        .input('start_location', mssql.VarChar(100), `${start_location}`)
        .input('end_location', mssql.VarChar(100), `${end_location}`)
        .input('isdeleted', mssql.INT, `${isdeleted}`)
        .input('isupdated', mssql.INT, `${isupdated}`)
        .input('issent', mssql.INT, `${issent}`)
        .input('isdelivered', mssql.INT, `${isdelivered}`)
        .input('current_location', mssql.VarChar(100), `${current_location}`)
        .input('sender_id', mssql.VarChar(100), `${sender_id}`)
  
        .execute('sp_update_parcel')
        .then((result) => {
            res.json("Parcel updated successfully");
        }).catch((e) => {
            console.log(e);
            res.send(e);
        })
    );
  }
  catch (e) {
    console.log(e);
  }
  
  };



  

//export modules
module.exports = {getusers, getparcels, updateeuser, updateparcel, deleteuser, getaparcel, getuserparcels, cancelparcel, createparcel, createuser,login}

