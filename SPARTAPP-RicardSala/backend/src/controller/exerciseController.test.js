const { createOne } = require('./exerciseController');

const Exercise = require('../models/exerciseModel');

jest.mock('../models/exerciseModel');
let req;
let res;

describe('Given a createOne function', () => {
  describe('When it is triggered', () => {
    describe('And create is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { body: {} };
        res = { json: jest.fn() };
        Exercise.create.mockResolvedValue({});

        await createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And create is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        Exercise.create.mockRejectedValue(new Error('Could not create'));

        await createOne(req, res);
      });
      test('Then res.send should been called with an error "Could not create"', () => {
        expect(res.send.mock.calls[0][0].message).toBe('Could not create');
      });
    });
  });
});
