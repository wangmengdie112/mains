//声明变量
/*var x=1
var abc="web2203"
console.log(x,abc)
*/
/*var did=1
var name="luck"
var salary=5000
console.log(did,name,salary)
*/

//一次声明多个变量
var eid=2
var ename="tom",salary=3000
//console.log(eid,ename,salary)

//命名规则
var a1=2 
//var 1a=2 数字不能出现在开头
//var _b3=3  下划线可在开头

//赋值
var user  //undefined 未定义，表示空值
    user="华为" //第二次直接赋值即可
//弱类型语言，可以储存任意类型的数据
	user=100
console.log(user)

//home work,要求声明多组变量，分别保存商品的单价和数量，计算出总价并打印输出
var price=1,tity=20
var pay=30, pent=40
//声明变量，保存总价
var totalprice=price*tity+pay*pent
console.log(totalprice)

//声明2个变量，分别保存2个值，交换2个变量保存的值;例如A=1 B=2 交换数值A=2  B=1
var a=1
var b=2
//声明第三个变量，需要把a保存
var  c=a
     a=b
     b=c
console.log(a,b)

