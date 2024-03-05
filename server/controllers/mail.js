require('dotenv').config();
const nodemailer = require("nodemailer");
const {google }= require('googleapis');
const CLIENT_ID = '110051534542-c2jp5rlgdnf15kgl7a9luekmefqqf79d.apps.googleusercontent.com'

const REDIRECT_URI ='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//04YOg1pX3QuX-CgYIARAAGAQSNwF-L9IrDKx4NOXRpVpT_PvNItNZp4WSm9ZFqkLfXCiGPNQgqPt0GE__74e8lkZvunBFdZt5uFM'
const CLIENT_SECRET = process.env.CLIENT_SECRET
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
async function sendMail(params) {

    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: ' pinkaware007@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        })
        const mailOptions = {
            from: 'Team PinkAware <pinkaware007@gmail.com>',
            to: params.Useremail,
            subject: "Appointment registered",
            text: `Dear ${params.Username},\n\nWe hope this email finds you well.\nWe are writing to confirm that your registration for an appointment has been successfully processed today. We are delighted to have you scheduled and look forward to providing you with our exceptional services.\nHere are the details of your appointment:\n\nDate:  ${params.Date_1}\nTime:${params.Time}\nVenue: Your Venue \nService/Reason for Appointment: [Brief description]\n\nPlease make sure to arrive at the venue on time and bring any necessary documents or information required for your appointment. If you have any specific requirements or questions, please feel free to reach out to us at [Contact Information].\n\nWe strive to ensure that your experience with us is smooth and satisfactory. \nYour feedback is valuable to us, and we appreciate any comments or suggestions you may have regarding our services.\nThank you for choosing PinkAware. We are committed to providing you with the best possible experience.`,

            // html:'<h1> Hello  !!</h1> <p> We '

        };

        const result = await transporter.sendMail(mailOptions)
        return result
    }

    catch (error) {
        console.log(error)
    }

}

module.exports = {
    sendMail
}