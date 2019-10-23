import configurations from '../config';
import UserHelper from './user-helper';

const { FACEBOOK_AUTH_URL } = configurations;

class FacebookAuthentication {
  /**
   * @param  {string} accessToken
   * @returns {Promise}
   * @description fetch user profile from facebook using an accessToken
   */
  static async getFaceBookProfile(accessToken) {
    const url = `${FACEBOOK_AUTH_URL}me?fields=name,first_name,last_name,
        picture,email&access_token=${accessToken}`;
    const profile = await UserHelper.getSocialUserProfile(url);
    return profile;
  }

  /**
   * @param  {object} profile
   * @returns {object} serialized profile
   * @description returns serialized profile object
   */
  static serializeProfile(profile) {
    const {
      name,
      first_name: firstName,
      email,
      picture,
      last_name: lastName
    } = profile;
    return {
      name,
      firstName,
      lastName,
      picture: picture.data.url,
      email
    };
  }
}

export default FacebookAuthentication;
