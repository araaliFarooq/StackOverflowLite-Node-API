/* eslint-disable no-undef */
import UserValidations from '../validations/user-validations';
import ValidateRequest from '../validate-request';

describe('UserValidations', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(() => ({
        send: jest.fn()
      }))
    };
    req = {
      params: {},
      query: {}
    };
    next = jest.fn();
  });
  it('should call method to validate param existence', () => {
    jest.spyOn(ValidateRequest, 'validateParamExistence');
    UserValidations.validateAccessToken(req, res, next);
    expect(ValidateRequest.validateParamExistence).toHaveBeenCalled();
  });
});
