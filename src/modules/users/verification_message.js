import nodemailer from 'nodemailer';
export async function sendMessageToEmail(){
    const verification_number = Math.floor(Math.random() * 10000)
    console.log(verification_number);
    var transporter =await nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: 'zuxriddinsaidaxmadov4@gmail.com',
        pass: 'dnfq tici bfmc pbcu'
      }
    });
    var mailOptions = {
      from: 'zuxriddinsaidaxmadov4@gmail.com',
      to: 'zuxriddinsaidaxmadov@gmail.com',
      subject: 'Verification password to registration',
      html: `<h1>Welcome to crm_system</h1><p>This is your verification code <b>${verification_number}</b></p>`
    };

    await transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}


