//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var pg = require('pg');
var connectionString = require('../modules/db-config.module');
//---------------------------------------------------------------------------//
router.post('/', function(req, res) {
  var receiverId = req.body.receiverId;
  var userType = req.body.userType + 's';
  console.log('RECEIVER id, USERTYPE', receiverId, userType);

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    } else {
      client.query('SELECT email FROM ' + userType + ' WHERE id = ' + receiverId,
      function(err, result) {
        done(); // close the connection.

        if(err) {
          console.log('select query error: ', err);
          res.sendStatus(500);
        } else {
          sendEmail(result.rows[0].email)
          console.log('EMAIL OF RECEIVER:', result.rows[0].email);
        }

      });
    }

  });

  function sendEmail(email){
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'pivotpvttest@gmail.com',
        pass: process.env.GMAIL_PASSWORD
      } });

      // setup e-mail data with unicode symbols
      var mailOptions = {
        from: 'pivotpvttest@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'STEMentor', // Subject line
        text: 'You have a new message! ', // plaintext body
        html: '<h1>You have a new message! </h1>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
          return console.log(error);
        } else{
          console.log('Message sent: ' + info.response);
          res.json({yo: info.response});
        };
      });
    }
  });

  module.exports = router;
