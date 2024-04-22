function checkScore(score) {
    if (score <= 5){
        return "C";
    }else if (score < 8 && score > 5){
        return "B";
    }else if (score >=8 && score <= 10){
        return "A";
    }
}
function avarge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
    }
    return sum/arr.length;
}
function rank(n) {
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < n.length; i++) {
        if (checkScore(n[i]) === "A") {
            a++;
        } else if (checkScore(n[i]) === "B") {
            b++;
        } else if (checkScore(n[i]) === "C") {
            c++;
        }
    }
    document.getElementById("resultA").innerHTML= "Số học sinh đạt loại A " +a;
    document.getElementById("resultB").innerHTML= "Số học sinh đạt loại B " +b;
    document.getElementById("resultC").innerHTML= "Số học sinh đạt loại B " +c;

}
let num = +prompt("Nhập số lượng của học sinh :")
let arr = [];
for (let i = 0; i < num; i++) {
    let score;
    do {
        score = +prompt("Nhập điểm của sinh viên  " +(i +1))
    }while (isNaN(score))
    arr.push(score)
}
document.write("Điểm trung bình của học sinh là "+avarge(arr)+"<br>");
rank(arr);






