const net = require('net');
const { connected } = require('process');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 conn.on('connect', () => {
    conn.write('Name: AT');
    console.log("Successfully connected to game server");

    // setInterval(function() {
    //   conn.write("Move: up"); 
    // }, 3000);


    // const moves = ["Move: up", "Move: right", "Move: down", "Move: left"]
    // let x = 1000;
    // for (const move of moves) {
        
    //   setTimeout(() => {
        

    //     conn.write(move);
    //     console.log(move)
    //   }, x);
    //   x = x + 1000;
    // }

 });
  


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  

  return conn;
}

module.exports = {
  connect,
 
};