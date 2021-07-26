// 2. callback function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var ans = cb(result);
    console.log(ans);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result * 2;
});
