// APIにリクエストを送る

// サーバーからJSONデータを取得する関数
async function fetchData() {
    try {
        const response = await fetch('/');
        const data = await response.json();
        //　表示される
        console.log(data);

        // 取得したデータをHTMLに表示する
        const dataList = document.getElementById('data-list');
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${item.id}, Name: ${item.name}`;
            dataList.appendChild(listItem);
        });
    } catch (error) {
        //　ここでエラーをキャッチしてしまっている状態、どうしよう
        console.error('Error fetching data:', error);
    }
    console.log('This is executed after fetch');
}

// fetchData関数を呼び出す
fetchData((data) => {
    // データが取得された後に行いたい処理
    console.log('Data received:', data);
});
