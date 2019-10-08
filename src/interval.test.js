const Interval = require('./interval');

describe('overlaps', function () {
    let intervalGenerale = new Interval(5,6);

    test('Test interval overlaps valeur return true', () => {
	let interval2 = new Interval(5,6);
        expect(intervalGenerale.overlaps(interval2)).toBe(true)
    });
    test('Test interval overlaps valeur return false', () => {
	let interval2 = new Interval(1,3);
        expect(intervalGenerale.overlaps(interval2)).toBe(false)
    });
});


describe('includes', function () {
    let intervalGenerale = new Interval(4,8);

    test('Test interval total includes - return true', () => {
	let interval2 = new Interval(4,8);
        expect(intervalGenerale.includes(interval2)).toBe(true)
    });

    test('Test interval  includes - return true', () => {
	let interval2 = new Interval(5,6);
        expect(intervalGenerale.includes(interval2)).toBe(true)
    });
    test('Test interval total includes - return false', () => {
	let interval2 = new Interval(1,3);
        expect(intervalGenerale.includes(interval2)).toBe(false)
    });
    test('Test interval includes - return false', () => {
	let interval2 = new Interval(1,5);
        expect(intervalGenerale.includes(interval2)).toBe(false)
    });
});

describe('union', function () {
    let intervalGenerale = new Interval(4,8);

    test('Test interval union - return true', () => {
	let interval2 = new Interval(5,6);
	let res = new Interval(4,8);
        expect(intervalGenerale.union(interval2)).toStrictEqual(res)
    });

    test('Test interval union - return true interval non lie', () => {
	let interval2 = new Interval(1,4);
	let res = new Interval(1,8);
        expect(intervalGenerale.union(interval2)).toStrictEqual(res)
    });

    test('Test interval union - return true interval non lie', () => {
	let interval2 = new Interval(1,3);
	let res = [interval2,intervalGenerale];
        expect(intervalGenerale.union(interval2)).toStrictEqual(res)
    });

    test('Test interval union - return true interval non lie', () => {
	let interval2 = new Interval(10,40);
	let res = [intervalGenerale,interval2];
        expect(intervalGenerale.union(interval2)).toStrictEqual(res)
    });

});

describe('intersection', function () {
    let intervalGenerale = new Interval(4,8);


test('Test interval intersection with inter2 in inter1', () => {
    let interval2 = new Interval(5,6);
    let res = new Interval(5,6);
        expect(intervalGenerale.intersection(interval2)).toStrictEqual(res)
    });
test('Test interval intersection with inter1 in inter2', () => {
    let interval2 = new Interval(1,16);
    let res = new Interval(4,8);
        expect(intervalGenerale.intersection(interval2)).toStrictEqual(res)
    });
test('Test interval intersection with part of inter2 in inter1', () => {
    let interval2 = new Interval(5,10);
    let res = new Interval(5,8);
        expect(intervalGenerale.intersection(interval2)).toStrictEqual(res)
    });

test('Test interval intersection with part of inter1 in inter2', () => {
    let interval2 = new Interval(3,6);
    let res = new Interval(4,6);
        expect(intervalGenerale.intersection(interval2)).toStrictEqual(res)
    });
test('Test interval intersection with inter2 and inter1 not crossing', () => {
    let interval2 = new Interval(1,4);
    
        expect(intervalGenerale.intersection(interval2)).toStrictEqual(null)
    });
});