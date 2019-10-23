/* eslint-disable no-undef */
import ValidateRequest from '../validate-request';

describe('ValidateRequest', () => {
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
  it('should validate validateParamExistence', () => {
    ValidateRequest.validateParamExistence(req, res, next, 'query');
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should call next', () => {
    req.query = {
      query: 'query'
    };
    ValidateRequest.validateParamExistence(req, res, next, 'query');
    expect(next).toHaveBeenCalled();
  });
});
