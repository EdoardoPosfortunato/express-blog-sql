import mysql from "mysql2";


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abreschi27!',
    database: 'blog_db'
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

export default connection