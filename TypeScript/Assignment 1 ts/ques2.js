var Sortt = function (arr) {
    var l = arr.length;
    var temp;
    for (var i = 0; i < l - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1;
        }
    }
    console.log(arr);
};
Sortt([1, 323, 42, 123]);
