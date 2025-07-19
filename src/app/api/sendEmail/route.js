import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      pincode,
      city,
      address,
      gender,
      category,
      investment,
      business_type,
      message,
    } = body;

    const safeRecipientEmail = process.env.RECIPIENT_EMAIL;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // 'cp-2.webhostbox.net'
      port: parseInt(process.env.SMTP_PORT) || 587, // 465
      secure: process.env.SMTP_PORT === '465', // true for 465 (SSL)
      auth: {
        user: process.env.SMTP_USER, // 'leade@iffcobusiness.in'
        pass: process.env.SMTP_PASS, // your password
      },
    });

    await transporter.verify();
    console.log('SMTP connection verified');

    // Determine if it's a dealer application (from page.js) or contact form (from Contact.js)
    const isDealerApplication = phone && pincode && city && address && gender && category && investment && business_type;

    // Admin email template
    let adminEmailTemplate;
    if (isDealerApplication) {
      adminEmailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <!-- eslint-disable-next-line @next/next/no-img-element -->
          <img src="https://iffcobusiness.in/logo.svg" alt="IFFCO Logo" style="max-width: 150px; height: auto;" />
          <h2 style="color: #2e7d32;">New Dealer Application</h2>
          <p>A new application has been submitted for an IFFCO fertiliser dealership. Below are the details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Pincode</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${pincode}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>City</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${city}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Address</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${address}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Gender</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${gender}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Category</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${category}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Investment Capability</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${investment}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Business Type</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${business_type}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px;">Please review the application and contact the applicant for further steps.</p>
          <p style="margin-top: 20px;">For any queries, please reach out to us at <a href="mailto:${safeRecipientEmail}">${safeRecipientEmail}</a></p>
        </div>
      `;
    } else {
      adminEmailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <!-- eslint-disable-next-line @next/next/no-img-element -->
          <img src="https://iffcobusiness.in/logo.svg" alt="IFFCO Logo" style="max-width: 150px; height: auto;" />
          <h2 style="color: #2e7d32;">New Contact Form Submission</h2>
          <p>A new message has been submitted via the contact form. Below are the details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px;">Please review the message and respond to the sender.</p>
          <p style="margin-top: 20px;">For any queries, please reach out to us at <a href="mailto:${safeRecipientEmail}">${safeRecipientEmail}</a></p>
        </div>
      `;
    }

    // User email template
    let userEmailTemplate;
    if (isDealerApplication) {
      userEmailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <!-- eslint-disable-next-line @next/next/no-img-element -->
          <img src="https://iffcobusiness.in/logo.svg" alt="IFFCO Logo" style="max-width: 150px; height: auto;" />
          <h2 style="color: #2e7d32;">Thank You for Your Application</h2>
          <p>Dear ${name},</p>
          <p>We have successfully received your application to become an IFFCO fertiliser dealer. Below are the details you submitted:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Pincode</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${pincode}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>City</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${city}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Address</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${address}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Gender</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${gender}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Category</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${category}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Investment Capability</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${investment}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Business Type</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${business_type}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px;">Our team will review your application and get back to you soon. For any queries, please reach out to us at <a href="mailto:${safeRecipientEmail}">${safeRecipientEmail}</a>.</p>
          <p style="margin-top: 20px;">Thank you for your interest in partnering with IFFCO!</p>
        </div>
      `;
    } else {
      userEmailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <!-- eslint-disable-next-line @next/next/no-img-element -->
          <img src="https://iffcobusiness.in/logo.svg" alt="IFFCO Logo" style="max-width: 150px; height: auto;" />
          <h2 style="color: #2e7d32;">Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>We have successfully received your message via the contact form. Below are the details you submitted:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px;">Our team will review your message and get back to you soon. For any queries, please reach out to us at <a href="mailto:${safeRecipientEmail}">${safeRecipientEmail}</a>.</p>
          <p style="margin-top: 20px;">Thank you for contacting IFFCO!</p>
        </div>
      `;
    }

    await transporter.sendMail({
      from: `"IFFCO Fertiliser" <${process.env.SMTP_USER}>`,
      to: safeRecipientEmail,
      subject: isDealerApplication ? 'New Dealer Application Submission' : 'New Contact Form Submission',
      html: adminEmailTemplate,
    });

    await transporter.sendMail({
      from: `"IFFCO Fertiliser" <${process.env.SMTP_USER}>`,
      to: email,
      subject: isDealerApplication ? 'IFFCO Dealer Application Confirmation' : 'IFFCO Contact Form Confirmation',
      html: userEmailTemplate,
    });

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in /api/sendEmail:', error);
    return new Response(JSON.stringify({ message: 'Failed to send emails', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}