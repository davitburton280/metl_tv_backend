const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Users = db.users;
const bcrypt = require('bcryptjs');

const nodemailer = require('nodemailer')

const showIfErrors = require('../helpers/showIfErrors');


exports.login = async (req, res) => {

    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let {email} = req.body;

        let attributes = [`full_name`, 'email', 'profile_img', 'password', 'id', 'status_id'];

        // Active status selecting
        let statusWhere = sequelize.where(sequelize.col('`users_status`.`name_en`'), 'active');


        // Selecting an employee that has an email matching request one
        let user = await Users.findOne({
            attributes: attributes,
            include: [],
            where: {email: email} //userTypeWhere
        }, res);


        if (!res.headersSent) {


            // User is not active
            if (!user) res.status(500).json({msg: 'You don\'t have such privileges or the account is inactive'});

            else {
                // Cloning users object without password and saving user full name
                let {password, ...details} = user.toJSON();
                console.log("'" + user.full_name + "' has logged in");
                req.session.full_name = user.full_name;
                console.log(req.session)
                res.status(200).json({
                    token: jwt.sign(details, 'secretkey', {expiresIn: '8h'}),
                    user_id: user.id,
                    full_name: user[`full_name`]
                })
            }


        }
    }
};

exports.logout = (req, res) => {
    req.logout();
    console.log(req.session)
    console.log("'" + req.session.loggedUser + "' has logged out");
    req.session.destroy();
    res.status(200).json({msg: 'OK'})
};

exports.register = async (req, res) => {


    let transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        service: 'gmail',
        // port: 465,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'sofiabruno3003@gmail.com', // generated ethereal user
            pass: 'davmark11' // generated ethereal password
        }
    });

    let randomCode = Math.floor(1000 + Math.random() * 9000);
    console.log("CODE" + randomCode)
    // console.log(process.env)

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Trading " <foo@example.com>', // sender address
        to: 'sofiabruno3003@gmail.com', // list of receivers
        subject: 'Confirmation email', // Subject line
        text: 'You recently requested a password reset', // plain text body
        html: `${randomCode}` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(info)
        console.log(error)
        if (error) {
            res.status(500).json({msg: error.toString()})
        } else if (info) {

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.json(randomCode);
        }
        transporter.close();


    });


    // console.log(req.body)
    //
    // const Mailchimp = require('mailchimp-api-v3');
    //
    // const mailchimp = new Mailchimp('d1632e8c086194c75a68a30301d272d7-us2');
    //
    // const mcData = {
    //     members: [
    //         {
    //             email_address : req.body.email,
    //             status: 'pending'
    //         }
    //     ]
    // };
    //
    // const mcDataPost = JSON.stringify(mcData)
    //
    // const options = {
    //     url: 'https://us2.api.mailchimp.com/3.0/lists/1785ada6cb',
    //     method: 'POST',
    //     headers: {
    //         Authorization: 'auth d1632e8c086194c75a68a30301d272d7-us2'
    //     },
    //     body: mcDataPost
    // };
    //
    // request(options, (err, response,body) =>{
    //     console.log(response)
    //     if(err){
    //         res.json(err);
    //     }
    //     else {
    //         res.json(response);
    //     }
    // })

    // // Checking validation result from express-validator
    // if (!showIfErrors(req, res)) {
    //     // Getting request data and setting user fields to return
    //     let data = req.body;
    //     let email = data.email.trim();
    //
    //     // Saving the original password of user and hashing it to save in db
    //     let originalPass = data.password;
    //     data.password = bcrypt.hashSync(originalPass, 10);
    //
    //     await Users.create(data);
    //
    //     // Saving the original password again to request for authenticating the user at once
    //     data.password = originalPass;
    //     req.body = data;
    //
    //     // res.json("OK");
    //
    //     this.login(req, res);
    // }
};
