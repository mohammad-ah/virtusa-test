//Require the dev-dependencies
import { expect } from 'chai';
import * as request from "supertest";
import app from "../../app";


// test  /api/v2/parse post method
describe("Post /api/v2/parse with body data", () => {
    it("All data should be correct", async () => {
        const res = await request(app).post("/api/v2/parse").send({ "data": "JOHN0000MICHAEL0009994567"});
        expect(res.statusCode).equal(200);
        expect(res.body.data.firstName).equal("JOHN");
        expect(res.body.data.lastName).equal("MICHAEL");
        expect(res.body.data.clientId).equal("999-4567");
    });
});

// test  /api/v1/parse post method
describe("Post /api/v2/parse with body data", () => {
    it("All data should be correct", async () => {
        const res = await request(app).post("/api/v1/parse").send({ "data": "JOHN0000MICHAEL0009994567"});
        expect(res.statusCode).equal(200);
        expect(res.body.data.firstName).equal("JOHN0000");
        expect(res.body.data.lastName).equal("MICHAEL000");
        expect(res.body.data.clientId).equal("9994567");
    });
});
