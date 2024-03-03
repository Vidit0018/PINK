
const nodemailer = require("nodemailer");
const {google }= require('googleapis');

const CLIENT_ID = '110051534542-c2jp5rlgdnf15kgl7a9luekmefqqf79d.apps.googleusercontent.com'
const CLIENT_SECRET ='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'
const REDIRECT_URI ='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//04YOg1pX3QuX-CgYIARAAGAQSNwF-L9IrDKx4NOXRpVpT_PvNItNZp4WSm9ZFqkLfXCiGPNQgqPt0GE__74e8lkZvunBFdZt5uFM'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

async function sendMail(){

    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth : {
                type : 'OAuth2',
                user : ' pinkaware007@gmail.com',
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken : REFRESH_TOKEN,
                accessToken : accessToken ,
            }
        })

        const mailOptions = {
            from : 'Team Pinkaware <pinkaware007@gmail.com>',
            to: ' mannyisha808@gmail.com, vidit.msit@gmail.com ',
            subject: " Hello From Team Pinkaware",
            text : 'Team Pinkaware Welcomes you to the Community , Get Ready for a exciting Journey Ahead !!',
            // html:'<h1> Hello  !!</h1> <p> We '

        };

        const result = await transporter.sendMail(mailOptions)
        return result
    }

    catch(error){
        console.log(error)
    }

}

// sendMail().then(result=> 
//     console.log('Mail Sent'))
// .catch(error => console.log(error.message));
 
module.exports={
    sendMail
}