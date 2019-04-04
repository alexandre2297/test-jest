const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn(),
            push : jest.fn(),
            write : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository count', function () {
    
    test('count all books', () => {

        const dbMock = {
            get : jest.fn(),
            size : jest.fn(),
            value : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(1000);

        const repository = new BookRepository(dbMock);
        repository.getTotalCount();

        expect(dbMock.value.mock.results[0].value).toBe(1000);
    });
});

describe('Book repository TotalPrice', function () {
    
    test('sum prices Books', () => {

        const dbMock = {
            get : jest.fn(),
            map : jest.fn(),
            value : jest.fn(),
            reduce : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.map.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(dbMock);
        dbMock.reduce.mockReturnValue(3087.6);

        const repository = new BookRepository(dbMock);
        repository.getTotalPrice();

        expect(dbMock.reduce.mock.results[0].value).toBe(3087.6);
    });
});

describe('Book repository findByName', function () {
    
    test('get book by name', () => {

        const dbMock = {
            get : jest.fn(),
            find : jest.fn(),
            value : jest.fn()
        };
        var book = {
            "id": 1,
            "name": "azd5ss",
            "price": 7.99,
            "added_at": "2017-07-28T16:44:21.331Z"
        };
        dbMock.get.mockReturnValue(dbMock);
        dbMock.find.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(book);

        const repository = new BookRepository(dbMock);
        repository.getBookByName("azd5ss");

        expect(dbMock.value.mock.results[0].value).toBe(book);
    });
});