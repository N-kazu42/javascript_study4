// 5章　行追加ボタンを作ってみる
$(function(){
    let idx = 3;

    $('#btn1').click(function(){
        // ++idxは、一番左の列の番号
        $('#tbl1').append('<tr><td>' + (++idx) + '</td><td>xx</td><td>xx</td></tr>');
    });
});