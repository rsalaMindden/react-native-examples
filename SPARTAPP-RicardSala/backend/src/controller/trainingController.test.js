const { createOne, getAll } = require('./trainingController');
const Training = require('../models/trainingModel');

jest.mock('../models/trainingModel');

describe('Given a createOne function', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });
  describe('When it is triggered', () => {
    describe('And create is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { body: {} };
        res = { json: jest.fn() };
        Training.create.mockReturnValue({
          populate: jest.fn().mockResolvedValue(),
        });
        await createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And create is rejected', () => {
      test('Then res.send should been called with an error "Could not create"', async () => {
        Training.create.mockReturnValue({ populate: jest.fn().mockRejectedValue(new Error('Could not create')) });
        await createOne(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('Could not create');
      });
      test('Then res.status with 500', async () => {
        Training.create.mockRejectedValue();

        await createOne(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getAll function', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });
  describe('When it is triggered', () => {
    describe('And find is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { body: {} };
        res = { json: jest.fn() };
        Training.find.mockReturnValue({
          populate: jest.fn().mockResolvedValue(),
        });
        await getAll(req, res);
      });
    });
    describe('And getAll is rejected', () => {
      test('Then res.send should been called with an error "Could not get All"', async () => {
        Training.find.mockReturnValue({ populate: jest.fn().mockRejectedValue(new Error('Could not getAll')) });
        await getAll(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('Could not getAll');
      });
      test('Then res.status with 500', async () => {
        Training.create.mockRejectedValue();

        await getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
