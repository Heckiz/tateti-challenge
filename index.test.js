const isSolved = require('./index');

test('game is not yet finished', () => {
    expect(isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [2, 1, 0]])).toBe(-1);
});

test('player X win', () => {
    expect(isSolved([
        [1, 1, 1],
        [0, 0, 2],
        [2, 1, 0]])).toBe(1);
});

test('player O win', () => {
    expect(isSolved([
        [2, 1, 1],
        [2, 0, 2],
        [2, 1, 1]])).toBe(2);
});

test('cat game', () => {
    expect(isSolved([
        [1, 1, 2],
        [2, 2, 1],
        [1, 1, 2]])).toBe(0);
});