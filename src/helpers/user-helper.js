import fetch from 'node-fetch';
import UserService from '../services';
import { createToken } from './token-helper';
import sendEmail from './email-helper';

class UserHelper {
  /**
   * @param  {object} data
   * @returns {Promise} existing user object or creates new user basing on social account email
   * @description creates or returns an existing user basing on social account email
   */
  static async createSocialUser(data) {
    const info = {
      ...data,
      password: Math.random()
        .toString(36)
        .substring(7)
    };
    const existingUser = await UserService.findOneUser(
      { email: data.email },
      { password: 0 }
    );
    if (existingUser) {
      return existingUser;
    }
    const user = await UserService.createUser(info);
    return user;
  }

  /**
   * @param  {string} url
   * @returns {Promise}
   * @description fetches a user profile basing on url passed in
   */
  static async getSocialUserProfile(url) {
    try {
      const response = await fetch(url);
      const profile = await response.json();
      return profile;
    } catch (e) {
      return e.message || "Couldn't fetch user profile";
    }
  }
}

export const sendUserEmailConfirmation = async (req, user) => {
  const { _id, email } = user;
  const token = await createToken({ id: _id, email });

  const mailOptions = {
    from: 'no-reply@yourwebapplication.com',
    to: user.email,
    subject: 'Account Verification Token',
    text: `${'Hello,\n\n' +
      'Please verify your account by clicking the link: \nhttp://'}${
      req.headers.host
    }/api/v1/users/confirmation/${token}.\n`
  };
  await sendEmail(mailOptions);
};

export default UserHelper;
