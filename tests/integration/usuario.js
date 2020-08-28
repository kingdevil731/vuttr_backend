// imports
const app = require('../../src/indextest');
const request = require('supertest');

// lets
let idTest;

describe("Usuarios", function(){

    it("Cadastar Usuario", (done) => {
        request(app)
        .post('/auth')
        .send({
            usuario: "rf",
            nome: "ruben forner"
        })
        .expect(function(res){
            idTest = res.body._id;
        })
        .expect(201, done);
    }, 10000);

    it("Login do Usuario", (done) => {
        request(app)
        .get('/auth/login')
        .send({
            id: idTest
        })
        .set('Content-Type', 'application/json')
        .expect(202, done);
    }, 10000)
});