import configurations from '../config';
import UserHelper from './user-helper';

const { GOOGLE_AUTH_URL } = configurations;

export default class GoogleAuthentication {
  /**
   * @param  {string} accessToken
   * @returns {Promise} user profile from google
   * @description fetches google profile of a user from access_token
   */
  static async getGoogleProfile(accessToken) {
    const url = `${GOOGLE_AUTH_URL}plus/v1/people/me?access_token=${accessToken}`;
    const profile = await UserHelper.getSocialUserProfile(url);
    return profile;
  }

  /**
   * @param  {object} profile
   * @returns {object} serialize user profile
   * @description returns a serialize google profile of a user
   */
  static extractUserProfile(profile) {
    const {
      emails,
      image: { url },
      name: { familyName, givenName },
      displayName
    } = profile;
    return {
      image: url,
      familyName,
      givenName,
      displayName,
      email: emails[0].value
    };
  }
}
