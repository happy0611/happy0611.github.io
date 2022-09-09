let exercise_books =
    [
    ["start","startを入力して始めてください","start"],
    ["こんにちは世界", "こんにちは → hello", "hello world"],
    ["助けが必要ですか？", "符号(？。、)は不要", "do you need help"],
    ["彼らはまだ入院中です","病院 → hospital", "they are still in the hospital"],
    ["彼女は１２時に昼食を食べるのですか？","符号(？。、)は不要","does she eat lunch at twelve"],
    ["彼は先週末ケーキをつくった","先週 → weekend","he made a cake last weekend."],
];

let english_index = 0;


function changedisplayenglish(index) {
    let question = document.getElementById("DisplayedEnglish"); 
    //(今日の任務)hint を表示するようにしてください
    let hint = document.getElementById("hint");
    hint.textContent = exercise_books[index][1];
    //(今日の任務)正解 を表示するようにしてください
    let right = document.getElementById("right");
    right.textContent = exercise_books[index][2]
    
    question.textContent = exercise_books[index][0]; //textcontentはここに書く
    console.log("change");
}

function start() {
    alert("今日も一緒に頑張りましょう！");
    english_index = 0;
    changedisplayenglish(english_index);
    // english_index += 1;
}

function buttonclick2() {
    //入力した文字を取得
    let result = document.getElementById("result");
    let DisplayEnglish = document.getElementById("DisplayedEnglish").textContent; //input以外の要素を取得するにはvalueではなくtextContentなどを使う
    console.log("DisplayEnglish: " + DisplayEnglish);
    let text = document.getElementById("text1").value;
    console.log("get text: " + text);
    //正しいかどうかを判定する
    if (exercise_books[english_index][2] == text){
        result.textContent = "〇";
        english_index += 1;
        changedisplayenglish(english_index);
        // console.log("38のindexの今の数字は" + english_index);
    } else {
        result.textContent = "×";
    }
    //もし正しいであれば丸とid=resultの所で表示する
}

