const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 OK and content-type /html/', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBeTruthy();
        return done();
      });
  });
});

describe('GET /index.css', () => {
  it('should return 200 OK and content-type /css/', (done) => {
    request(app)
      .get('/index.css')
      .expect(200)
      .expect('Content-Type', /css/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBeTruthy();
        return done();
      });
  });
});

describe('GET /index.js', () => {
  it('should return 200 OK and content-type /javascript/', (done) => {
    request(app)
      .get('/index.js')
      .expect(200)
      .expect('Content-Type', /js/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBeTruthy();
        return done();
      });
  });
});

describe('GET /students', () => {
  it('should return 200 OK and content-type /json/', (done) => {
    request(app)
      .get('/students')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          'Zaher', 'Ibrahim',
          'Fady', 'Mohammed',
          'Saleh', 'Amjad',
          'Abdelrahman', 'Monther',
          'Mahmoud', 'Khalid',
          'Abdallah', 'Hani',
        ]);
        return done();
      });
  });
});

describe('POST /students', () => {
  it('should return 200 OK and content-type /html/', (done) => {
    request(app)
      .post('/students')
      .send({ name: 'Ali' })
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
