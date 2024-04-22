function deleteParameter(arr, num) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num){
            arr.splice(i,1);
        }
    }
    arrNew = arr;
    return arrNew;
}
let number = +prompt("Nhập số lượng phần tử trong mảng :")
let arr = [];
for (let i = 0; i < number; i++) {
    let num;
    do {
        num = +prompt("Nhập số thứ " +(i +1)+ " trong mảng")
    }while (isNaN(num))
    arr.push(num)
}

let num = +prompt("Nhập số ");
document.write("[ " +arr +" ]" + " sau khi đã bị xóa "+"[ " +deleteParameter(arr,num)+" ]");
