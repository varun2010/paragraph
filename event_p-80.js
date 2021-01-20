function Get_paragraph_1(){
    var item=[];
    for(var i=1;i<=6;i++){
        item.push(document.getElementById("paral_input_box_"+i).value);
    }
    item.join(". ");
    console.log(item);
    document.getElementById("p1").innerHTML=item.join(". ");
}
function Get_paragraph_2(){
    var item_1=[];
    for(var i=7;i<=12;i++){
        item_1.push(document.getElementById("paral_input_box_"+i).value);
    }
    item_1.join(". ");
    console.log(item_1);
    document.getElementById("p2").innerHTML=item_1.join(". ");
}