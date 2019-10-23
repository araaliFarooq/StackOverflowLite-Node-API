import sendGrid from '@sendgrid/mail';
import configurations from '../config';

sendGrid.setApiKey(configurations.SENDGRID_API_KEY);

const sendEmail = async (mailOptions) => {
  try {
    return await sendGrid.send(mailOptions);
  } catch (error) {
    return error.message || 'Couldnot send the email';
  }
};

export default sendEmail;
