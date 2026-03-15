const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendReservationEmails = async (customerData) => {
    const { name, email, date, time, guests, restaurantName } = customerData;

    // 1. Customer ko confirmation email
    const customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Reservation Confirmed at ${restaurantName}`,
        text: `Hi ${name}, aapki reservation ${date} ko ${time} baje ke liye confirm ho gayi hai. Shukriya!`
    };

    // 2. Admin ko alert email
    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New Reservation Alert - ${name}`,
        html: `<h3>New Booking Received</h3>
               <p><b>Customer:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Date:</b> ${date} at ${time}</p>
               <p><b>Guests:</b> ${guests}</p>`
    };

    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);
};

module.exports = sendReservationEmails;