let exercise_books =
    [
        ["start", "startを入力して始めてください", "start"],
        ["こんにちは", "ハローの方", "hello"],
        ["1月", "", "january"],
        ["6月", "", "june"],
        ["10月", "", "october"],
        ["春", "", "winter"],
        ["晴れ", "", "sunny"],
        ["ボール", "", "ball"],
        ["えんぴつ", "", "pencil"],
        ["生徒", "", "student"],
        ["先生", "", "teacher"],
        ["野球", "", "baseball"],
        ["サッカー", "", "soccer"],
        ["英語", "", "english"],
        ["窓", "", "window"],
        ["難易度が難しくなるよ！", "startを入力して始めてください", "start"],
        ["I ( ) a student.", "()を埋めてください", "am"],
        ["We ( ) are from Canada.", "()を埋めてください", "are"],
        ["I ( ) soccer", "()を埋めてください", "play"],
        ["あなたの姉は何歳ですか？", "符号(？。、)は不要", "how old is your sister"]
        ["私が英語を話すことができます", "できます → can", "i can speak English"],
        ["助けが必要ですか？", "符号(？。、)は不要", "do you need help"],
        ["難易度が難しくなるよ！", "startを入力して始めてください", "start"],
        ["彼らはまだ入院中です", "病院 → hospital", "they are still in the hospital"],
        ["彼女は１２時に昼食を食べるのですか？", "符号(？。、)は不要", "does she eat lunch at twelve"],
        ["彼は先週末ケーキをつくった", "先週 → weekend", "he made a cake last weekend"],
        ["彼女は日本語を話しますか？", "符号(？。、)は不要", "does she speak Japanese"],
        ["あなたは朝食に何を食べますか？", "符号(？。、)は不要", "what do you have for breakfast"],
        ["私たちは昨日公園の周りを歩きました", "昨日 → yesterday", "we walked around the park yesterday"],
    ]

let english_index = 0;

let new_index = english_index % exercise_books.length;

function changedisplayenglish(index, isRight) {
    let question = document.getElementById("DisplayedEnglish");
    //hintを表示しました
    let hint = document.getElementById("hint");
    hint.textContent = exercise_books[index][1];
    //間違っている時だけ正解を表示しました
    if (isRight == false) {
        let right = document.getElementById("right");
        right.textContent = "間違った問題の正解 " + exercise_books[index][2]
    }
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
    if (exercise_books[new_index][2] == text) {
        result.textContent = "〇";
        english_index += 1;
        new_index = english_index % exercise_books.length;
        changedisplayenglish(new_index, true);
        // console.log("38のindexの今の数字は" + english_index);
    } else {
        result.textContent = "×";
        // english_index += 1;
        // new_index = english_index % exercise_books.length;
        changedisplayenglish(new_index, false);
    }
    //もし正しいであれば丸とid=resultの所で表示する
}

