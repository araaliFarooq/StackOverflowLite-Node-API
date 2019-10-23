/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';
import UserService from '../../services';
import { UserHelper } from '..';

export const mockUserProfile = {
  email: 'dd@gamil.com'
};

jest.mock('node-fetch');

describe('User-Helper', () => {
  it('should createSocialUser if not existing', async () => {
    jest.spyOn(UserService, 'findOneUser').mockResolvedValue(null);
    jest.spyOn(UserService, 'createUser').mockResolvedValue({});
    await UserHelper.createSocialUser(mockUserProfile);
    expect(UserService.createUser).toHaveBeenCalled();
  });

  it('should return user profile', async () => {
    fetch.mockReturnValue({
      json: () => Promise.resolve({})
    });
    const response = await UserHelper.getSocialUserProfile(`https://graph.facebook.com/me?
        fields=name,first_name,last_name,picture,email&access_token=accessToken`);
    expect(response).toEqual({});
  });
});
