//以下の処理で文字を動かします。
let headding1 = document.getElementById('headding1');
 let degree = 0;
 function rotateHeadding1() {
   degree = degree + 5;
   headding1.style.transform = 'rotateX(' + degree + 'deg)';
 }
//タテ回転です
 setInterval(rotateHeadding1, 40);
 let tatoe = document.getElementById('tatoe');
let degree1 = 0;
 function rotatetatoe() {
   degree1 = degree1 + 6;
   tatoe.style.transform = 'rotateY(' + degree1 + 'deg)';
 }
//横回転です
 setInterval(rotatetatoe, 40);
 let mosimo = document.getElementById('mosimo');
 let degree2 = 0;
 function rotatemosimo() {
   degree2 = degree2 + 4;
   mosimo.style.transform = 'rotateX(' + degree2 + 'deg)';
 }
//タテ回転です

 setInterval(rotatemosimo,50);

