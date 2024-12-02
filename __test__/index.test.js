const request = require('supertest');
const mysql = require('mysql2');
const app = require('../index');
const e = require('express');

jest.mock('mysql2', () => {
    const mockConnection = {
        connect: jest.fn((callback) => callback(null)),
        query: jest.fn(),
        end: jest.fn()
    };
    return {
        createConnection: jest.fn(() => mockConnection)
    };
});

describe('App test', () => {
    let connection;

    beforeAll(() => {
        connection = mysql.createConnection();
    });

    afterAll(() => {
        connection.end();
    });

    test('should connect to database', () => {
        expect(connection.connect).toHaveBeenCalled();
    });

    test('should return a list of users on GET /', async () => {
        const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        connection.query.mockImplementation((query, callback) => {
            if (query === 'SELECT * FROM users') callback(null, users);
        });

        const response = await request(app).get('/');
        expect(response.body).toEqual(users);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(users);
        expect(connection.query).toHaveBeenCalledWith('SELECT * FROM users', expect.any(Function));
    });


    test('should return 500 if there is an error', async () => {
        connection.query.mockImplementation((query, callback) => {
            if (query === 'SELECT * FROM users') callback(new Error('Error executing query'));
        });

        const response = await request(app).get('/');
        expect(response.status).toBe(500);
        expect(response.text).toBe('Error executing query');
    });

});