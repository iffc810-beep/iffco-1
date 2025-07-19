import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, pincode, city, address, gender, category, investment, business_type, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !pincode || !city || !address || !gender || !category || !investment || !business_type || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Nodemailer configuration for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address for SMTP authentication
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.RECIPIENT_EMAIL) {
      return new Response(JSON.stringify({ message: 'Gmail configuration missing' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Admin email options
    const adminMailOptions = {
      from: `"${name}" <${email}>`, // User's name and email as the sender
      replyTo: email, // Allow admin to reply to the user's email
      to: process.env.RECIPIENT_EMAIL, // Admin's email address
      subject: 'New IFFCO Dealer Application',
      text: `
        New Dealer Application:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Pincode: ${pincode}
        City: ${city}
        Address: ${address}
        Gender: ${gender}
        Category: ${category}
        Investment Capability: ${investment}
        Business Type: ${business_type}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>IFFCO Dealer Application</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" width="100%" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #004aad; padding: 20px; text-align: center;">
                     <!-- eslint-disable-next-line @next/next/no-img-element -->
                      <img src="${process.env.DOMAIN_ADDRESS}/logo.svg" alt="IFFCO Logo" style="max-width: 150px; height: auto;" />
                      <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0;">New Dealer Application</h1>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="color: #333333; font-size: 20px; margin-bottom: 20px;">Application Details</h2>
                      <table role="presentation" width="100%" style="font-size: 16px; color: #333333;">
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Name:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Email:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><a href="mailto:${email}" style="color: #004aad; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Phone:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${phone}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Pincode:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${pincode}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>City:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${city}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Address:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${address}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Gender:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${gender}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Category:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${category}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Investment Capability:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${investment}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><strong>Business Type:</strong></td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${business_type}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;"><strong>Message:</strong></td>
                          <td style="padding: 10px 0;">${message}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f8f8; padding: 20px; text-align: center; font-size: 14px; color: #666666;">
                      <p style="margin: 0;">Thank you for your interest in becoming an IFFCO dealer!</p>
                      <p style="margin: 10px 0;">
                        <a href="${process.env.DOMAIN_ADDRESS}" style="color: #004aad; text-decoration: none;">Visit IFFCO Website</a>
                      </p>
                      <p style="margin: 0;">© ${new Date().getFullYear()} IFFCO. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // User confirmation email options
    const userMailOptions = {
      from: `"IFFCO Team" <${process.env.GMAIL_USER}>`, // Sender is IFFCO (your Gmail address)
      to: email, // User's email address from form
      subject: 'Thank You for Your IFFCO Dealer Application',
      text: `
        Dear ${name},

        Thank you for applying to become an IFFCO Fertiliser Dealer. We have received your application and will review it shortly. Our team will contact you for the next steps.

        For any queries, please reach out to us at ${process.env.RECIPIENT_EMAIL}.

        Best regards,
        IFFCO Team
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>IFFCO Application Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" width="100%" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #004aad; padding: 20px; text-align: center;">
                     <!-- eslint-disable-next-line @next/next/no-img-element -->
                      <img src="${process.env.DOMAIN_ADDRESS}/logo.svg" alt="IFFCO Logo" style="max-width: 150px; height: auto;" />
                      <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0;">Application Received</h1>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="color: #333333; font-size: 20px; margin-bottom: 20px;">Dear ${name},</h2>
                      <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                        Thank you for applying to become an IFFCO Fertiliser Dealer. We have successfully received your application and our team will review it shortly. You will be contacted soon regarding the next steps.
                      </p>
                      <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                        If you have any questions, please feel free to reach out to us at <a href="mailto:${process.env.RECIPIENT_EMAIL}" style="color: #004aad; text-decoration: none;">${process.env.RECIPIENT_EMAIL}</a>.
                      </p>
                      <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                        Best regards,<br />
                        IFFCO Team
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f8f8; padding: 20px; text-align: center; font-size: 14px; color: #666666;">
                      <p style="margin: 0;">Partner with IFFCO to empower farmers across India.</p>
                      <p style="margin: 10px 0;">
                        <a href="${process.env.DOMAIN_ADDRESS}" style="color: #004aad; text-decoration: none;">Visit IFFCO Website</a>
                      </p>
                      <p style="margin: 0;">© ${new Date().getFullYear()} IFFCO. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return new Response(JSON.stringify({ message: 'Failed to send emails' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}