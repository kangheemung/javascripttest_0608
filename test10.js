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
function calculateMinimumNotesAndCoins(amount) {
    if (isNaN(amount) || amount <= 0) {
        return "유효한 금액을 입력해주세요.";
    }

    const denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
    const result = {};

    for (let denomination of denominations) {
        const count = Math.floor(amount / denomination);
        if (count > 0) {
            result[denomination] = count;
            amount -= count * denomination;
        }
    }

    return result;
}
