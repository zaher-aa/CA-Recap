// 1
const getUsernameFromDatabase = (email, callback) => {
  const database = db.get("data");
  const user = database.find(user => user.email === email);
  const username = user ? user.username : null;
  if (!username){
      callback(new Error('No user found'));
  }
  callback(null, username);
};

getUsernameFromDatabase('zaher@gmail.com', (err, username) => {
  if (err) {
    console.log("Sorry there was a problem");
  } else {
    console.log(`Marhaba ${username}`);
  }
});

// 2
const addUser = (data, cb) => {
  db_connection.query('INSERT INTO users (name, email,password) VALUES ($1, $2, $3)', [name, email, password], (error) => {
    if (error) {
      cb(new Error('Failed to add user'));
    } else {
      return true;
    }
  });
};

// 3
function parallel (tasks, callback) {
  let results = [];
  let counter = 0;

  tasks.forEach((task) => task((err, result) => {
    if (err) {
      callback(result);
    } else {
      results.unshift(result)
      counter++;

      if (counter === tasks.length) {
        callback(null, results)
      }
    }
  }))
}

var timeStarted = Date.now();
parallel([
  function(callback) {
    setTimeout(function() {
      callback(undefined, 1);
    },2000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined, 2);
    },1000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined, 3);
    },1500);
  },
  // function(callback) {
  //   setTimeout(function() {
  //     callback('boom',undefined);
  //   },1200);
  // }
], function(err, result) {
  var duration = (Date.now() - timeStarted);
  console.log('duration:', duration); // 2000s

  if (err) {
    console.log('err', err); // undefined
  } else {
    console.log('result', result); // [1,2,3]
  }
});