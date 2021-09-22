const connection = require('./connection');

const serialize = (bookName) => ({
  title: bookName.title,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;'
  );
  return books.map(serialize);
}

module.exports = {
  getAll,
};
