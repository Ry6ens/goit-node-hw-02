/* 
1. Status 200
2. Response token
3.
*/

const mongoose = require("mongoose");
const request = require("supertest");

require("dotenv").config();

const app = require("../../app");
const { User } = require("../../models/user");

const { DB_HOST, PORT } = process.env;

describe("test auth routes", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(DB_HOST).then(() => done());
  });

  afterEach((done) => {
    mongoose.connection.db.dropCollection(() => {
      mongoose.connection.close(() => done());
    });
  });

  test("test login route", async () => {
    const newUser = {
      email: "ry6ens@gmail.com",
      password: "12345678",
    };

    const user = await User.create(newUser);

    /*
      1. Проверить правильность получаемого ответа на 
      AJAX-запрос документации
      2. Проверить что в базу записался нужный элемент.
      */

    const loginUser = {
      email: "ry6ens@gmail.com",
      password: "12345678",
    };

    const response = await request(app).post("/api/auth/login").send(loginUser);
    expect(response.statusCode).toBe(200);
    const { body } = response;
    expect(body.token).toByTruthy();
    const { token } = await User.findById(user._id);
    expect(body.token).toBe(token);
  });
});
