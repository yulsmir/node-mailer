const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'rudy.hettinger45@ethereal.email', // test email
      pass: 'cJB38dE4CSGwkKE5kF', // test pass
    },
  });

  let info = await transporter.sendMail({
    from: `Me <myemail@mail.com>`,
    to: 'bar@example.com',
    subject: 'Hi, test email with nodemailer',
    html: '<h2>Sending emails with Node.js</h2>',
  });

  res.json(info);
};

module.exports = sendEmail;
