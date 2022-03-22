const app = require('./server');
const connection = require('./db/connections');

app.get('/user-books', async ({ body }, res, next) => {
  const { name: username } = body;

  try {
    const userBooks = await connection.query(`
    SELECT books.name FROM users
    JOIN user_books ON users.id = user_books.user_id
    JOIN books ON user_books.book_id = books.id WHERE users.name = $1
    `, [username]);

    if (!userBooks) {
      res.json({ msg: `${username} Have No Books` });
    } else {
      res.json({ msg: 'Success', books: userBooks.rows });
    }
  } catch (err) {
    next(err);
  }
});
