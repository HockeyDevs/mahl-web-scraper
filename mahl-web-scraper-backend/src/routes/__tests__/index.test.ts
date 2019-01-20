import request from 'supertest'

import app from '../../app'

describe('index', () => {
  it('returns a default index page', () =>
    request(app)
      .get('/')
      .expect(200))
})
