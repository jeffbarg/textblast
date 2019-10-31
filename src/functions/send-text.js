let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;

exports.handler = function(event, context, callback) {
  const requestBody = JSON.parse(event.body);
  const number = requestBody.number;
  const message = requestBody.message;

  var twilio = require("twilio");
  var client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: message,
      to: number, // Text this number
      from: "+14194190034" // From a valid Twilio number
    })
    .then(message => {
      console.log(message.sid);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ ok: true })
      });
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ ok: false, message: e.message })
      });
    });
};
