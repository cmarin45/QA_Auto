const { spec, request } = require("pactum");
const baseUrl = "https://jsonplaceholder.typicode.com";
const { faker } = require("@faker-js/faker");

describe("Put post test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });
  it("PUT post test", async () => {
    const randomFullName = faker.person.fullName();
    const requestBody = {
      userId: 2,
      title: randomFullName,
      body: "body2",
    };
    await spec()
      .put(`${baseUrl}/posts/1`)
      .withBody(requestBody)
      .expectStatus(200)
  });
});
