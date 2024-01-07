// 　APIのエンドポイントを作成

const express = require('express');
const mysql = require('mysql');
const app = express();

// DBへの接続情報
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3164maiko',
    port : 3306,
    database: 'test'
});

// データベースに接続
connection.connect((err) => {
    if (err){
        // 接続失敗時
        console.log('Error: ${err.stack}');
        return;
    }
    console.log('success, ${connection.threadId}');
    }
);

// APIエンドポイントの作成
app.get('/', (req, res) => {
    connection.query('SELECT * FROM test;', (error, result) => {
        if (error) {
            throw error;
        }
        res.json(result);
    });
});

// // データベースの切断
// connection.end();

// サーバーの起動
const port = 5500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


