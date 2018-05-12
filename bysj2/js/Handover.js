var curIndex=0; 
//时间间隔 单位毫秒 
var timeInterval=1000; 
var arr=new Array(); 
arr[0]="images/示例图1.jpg"; 
arr[1]="images/示例图2.jpg"; 
arr[2]="images/示例图3.jpg"; 
arr[3]="images/示例图4.jpg"; 
arr[4]="images/示例图5.jpg";
setInterval(changeImg,timeInterval); 
function changeImg() 
{ 
var obj=document.getElementById("obj"); 
if (curIndex==arr.length-1) 
{ 
curIndex=0; 
} 
else 
{ 
curIndex+=1; 
} 
obj.src=arr[curIndex]; 
} 
