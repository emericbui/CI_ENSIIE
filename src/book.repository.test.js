const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
    
});

describe('Book repository getTotalCount',  () => {
    test('Get total books count ',() => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            size: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(12)
        };
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toBe(12);
    });
});

describe('getTotalPrice method', () => {
    test('books total price should be 25.74', () => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue([
                {id: 1, name: "Unit test1", price: 5.99},
                {id: 2, name: "Unit test2", price: 6.89},
                {id: 3, name: "Unit test3", price: 3.57},
                {id: 4, name: "Unit test4", price: 4.99},
                {id: 5, name: "Unit test5", price: 4.3}
            ])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(25.74);
    });
});

describe('getBookByName method', () => {
    test('should get all the books named "Pillars Of The Earth" from the db', () =>  {
        const pillarsOfTheEarthBooks =  [
            {
                id: 12,
                name: 'Pillars Of The Earth',
                price: 17.99,
                added_at: '2019-05-05'
            },
            {
                id: 13,
                name: 'Pillars Of The Earth',
                price: 17.99,
                added_at: '2019-05-05'
            },
            {
                id: 54,
                name: 'Pillars Of The Earth',
                price: 17.99,
                added_at: '2019-09-28'
            }
        ];

        const dbMock = {
            get: jest.fn().mockReturnThis(),
            find: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(pillarsOfTheEarthBooks)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName('Pillars Of The Earth')).toBe(pillarsOfTheEarthBooks);
    });
});