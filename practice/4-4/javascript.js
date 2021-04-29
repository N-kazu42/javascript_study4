// 課題4-4-1: 数量と単価を与えると、税込金額を返す関数を作る。
function tax_include(price){
    return price * 1.1;
}
let total_price = tax_include(1100);
console.log(total_price)

