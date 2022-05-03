const database = require('../util/database');

module.exports = class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE user = ?', [username]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [user.name, user.email, user.password]
    );
  }
};
