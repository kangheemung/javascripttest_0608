function findSmallestElement(arr) {
    if (!Array.isArray(arr)) {
        return "引数は配列である必要があります。";
    }

    if (arr.length === 0) {
        return 0;
    }

    if (arr.some(isNaN)) {
        return "配列内のすべての要素は数字である必要があります。";
    }

    return Math.min(...arr);
}
