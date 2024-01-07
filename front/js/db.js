const mysql = require('mysql');
const express = require('express');
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

// debug//
// データベースクエリの実行
connection.query(
    ' SELECT * FROM test;',
    (error, results) => {
        console.log(error);
        for (let i = 0; i < results.length; i++){
            console.log(results[i].id);
            console.log(results[i].name);
        }
    }
)

// ルートエンドポイントの設定
app.get('/',(req,res) =>{
    connection.query('SELECT * FROM test;',(error,result) =>{
        if (error) throw error;
        res.json(result);
    });
})


// データベースの切断
connection.end();


