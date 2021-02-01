import ErrorRepository from './errorRepo';

test('return current error', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(1)).toBe('error #1');
  expect(errorRepo.translate(2)).toBe('error #2');
});

test('return Unknown error', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(3)).toBe('Unknown error');
});
