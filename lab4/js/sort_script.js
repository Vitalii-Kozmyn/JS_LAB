//метод обміну:
function sortExchange(arr, filter) {
    for (let i = arr.length - 1; i > 0; i--) {
        let counter = 0;
        for (let j = 0; j < i; j++) {
            if (filter === "Ascending") {
                if (arr[j] > arr[j + 1]) {
                    let tempData = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tempData;
                    counter++;
                } else { console.log("Error"); }
            //...................................
            } else if (filter === "Descending") {
                if (arr[j] < arr[j + 1]) {
                    let tempData = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tempData;
                    counter++;
                } else { console.log("Error"); }
            }
        }
        if (counter === 0) { break; }
    }
}

// let data = [2,6,3,7,8,4,2,10];

// sortExchange(data, "Descending");

// console.log(data);

//..............................................................