const app = require('../../src/indextest');
const request = require('supertest');

describe("Ferramenta", function() {

    afterAll(async (done) => {
        done();
    });

    it("Deve ser capaz de criar uma nova ferramenta", (done) => {
        request(app)
        .post('/tools')
        .set('usuario', 'ruben')
        .set('token', 'aecc853164c1beb557302b49')
        .send({
            title: "git",
            link: "https://github.com/git",
            description: "versionamento",
            tags: [
                "vs",
                "vs code",
                "visual studio code",
                "editor",
                "ide"
            ]
        })
        .expect(201, done);
    }, 10000);

    it("Devera obter a lista das ferramentas na base de dados", (done) => {
        request(app)
        .get('/tools')
        .expect(200, done);
    }, 15000);
});