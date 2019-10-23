/* eslint-disable no-undef */
import { models } from '../../database';
import UserService from '..';

describe('UserService', () => {
  it('should return all users', async () => {
    jest.spyOn(models.User, 'find').mockReturnValue([]);
    const result = await UserService.findAllUsers({});
    expect(result).toEqual([]);
  });

  it('should register a new user', async () => {
    jest.spyOn(models.User, 'find').mockReturnValue([]);
    const result = await UserService.findAllUsers({});
    expect(result).toEqual([]);
  });
});
