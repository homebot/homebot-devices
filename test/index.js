const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./app');
const responseHelper = require('./helpers/response');
const mongoose = require('mongoose');

const should = chai.should();
chai.use(chaiHttp);

before(function (done) {
    setTimeout(() => {
        done();
    }, 2000)
});

describe('Devices', () => {

    describe('GET /api/v1/devices', () => {
        it('it should return array of devices', (done) => {
            chai.request(app)
                .get('/api/v1/devices')
                .end((err, res) => {
                    should.not.exist(err);
                    res.body.should.be.an('array');
                    done();
                });
        });
    });

    describe('PUT /api/v1/devices/59b50d152d9f6b4110ec0000', () => {
        it('it should return updated device', (done) => {
            chai.request(app)
                .put('/api/v1/devices/59b50d152d9f6b4110ec0000')
                .send({
                    'name': 'Лампочка Xiaomi'
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.body.should.be.an('object');
                    res.body.name.should.equal('Лампочка Xiaomi')
                    done();
                });
        });
    });

    describe('GET /api/v1/devices/59b50d152d9f6b4110ec0000', () => {
        it('it should return device', (done) => {
            chai.request(app)
                .get('/api/v1/devices/59b50d152d9f6b4110ec0000')
                .end((err, res) => {
                    should.not.exist(err);
                    res.body.should.be.an('object');
                    res.body.name.should.equal('Лампочка Xiaomi')
                    done();
                });
        });
    });

    describe('POST /api/v1/devices', () => {
        it('it should create new devices', (done) => {
            chai.request(app)
                .post('/api/v1/devices/')
                .send({
                    'type': 'light',
                    'name': 'Новая лампочка',
                    'image': {
                        'origUrl': 'https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/20/goods-img/1529469716585565185.jpg'
                    },
                    'where': '^кухн'
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.body.should.be.an('object');
                    res.body.type.should.equal('light');
                    res.body.name.should.equal('Новая лампочка');
                    res.body.where.should.equal('^кухн');
                    done();
                });
        })
    });
});