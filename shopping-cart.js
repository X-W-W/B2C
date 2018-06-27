/*实现商品的全选功能及数量和价格的计算*/
var tr =document.getElementsByClassName("t-tr") //获取table下的tbody下的每一行
var checkInputs = document.getElementsByClassName('check-one');
var checkAllInputs = document.getElementById("check-all");
var selectedTotal = document.getElementById('selectedTotal');
var priceTotal = document.getElementById('priceTotal');
//计算总数和价格
function getTotal(){
 	var selected = 0;
 	var price = 0;
 	for(var i=0;i < tr.length; i++){
 		if(tr[i].getElementsByTagName('input')[0].checked){
  			selected += parseInt(tr[i].getElementsByTagName('input')[1].value);
  			price += parseFloat(tr[i].cells[4].innerHTML);//cells属性为获得tr下面的td
 		}
 	}
 	priceTotal.innerHTML = price;
}
//全选框实现
function selectA(){
	if(this.checked == false)
	{
		document.getElementById("check-all").checked = false;
	}
	getTotal();
}
function selectAll(){
	if(checkAllInputs.checked == true)
		for(var j=0;j<checkInputs.length;j++)
		  	checkInputs[j].checked = true;
	else
		for(var j=0;j<checkInputs.length;j++)
		  	checkInputs[j].checked = false;
	getTotal();
}
//删除操作
function deleteGoods(str){
	var tr1 = document.getElementById(str);
	tr1.innerHTML="";
}