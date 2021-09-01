const { deleteUserById, updateUserById } = require('./userController');

const User = require('../models/userModel');

jest.mock('../models/userModel');

let req;
let res;

beforeEach(() => {
  res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };
});
describe('Given a deleteUserById', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndDelete is resolved', () => {
      test('Then res.send should be called with no arguments', async () => {
        req = { params: { userId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.findByIdAndDelete.mockResolvedValue({});

        await deleteUserById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And deleteUserById is rejected', () => {
      beforeEach(async () => {
        req = { params: { gnomeId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.findByIdAndDelete.mockRejectedValue(new Error('Could not create'));

        await deleteUserById(req, res);
      });
      test('Then res.send should been called with an error "Could not create"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not create');
      });
    });
  });
});

describe('Given a updateUserById function', () => {
  describe('When it is triggered', () => {
    describe('And findOneAndUpdate is resolved', () => {
      test('Then res.send should be called with no arguments', async () => {
        req = { params: { userId: '1' } };
        res = { json: jest.fn() };
        User.findOneAndUpdate.mockResolvedValue();

        await updateUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And updateUserById is rejected', () => {
      beforeEach(async () => {
        req = { params: { userId: '1' } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.findOneAndUpdate.mockRejectedValue(new Error('Could not update'));

        await updateUserById(req, res);
      });

      test('Then res.send should have been called with an error "Could not update"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not update');
      });

      test('Then res.status should have been called with 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
