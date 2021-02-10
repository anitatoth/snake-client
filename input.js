let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function handleUserInput(key) {
   
    if (key === '\u0003') {
      process.exit();
          } 
    if (key === 'w') {
      conn.write("Move: up")
    }

    if (key === 'a') {
      conn.write('Move: left');
    }

    if (key === 's') {
      conn.write('Move: down');
    }

    if (key === 'd') {
      conn.write('Move: right');
    }

    if (key === 'p'){
      conn.write("Say: I am going to win")
    }

    if (key === 'l'){
      conn.write("Say: Heyoo!")
    }

    if (key === 'm'){
      conn.write("Say: Mama-mia!")
    }


   });


  return stdin;
}


module.exports = {
  setupInput,
 
};