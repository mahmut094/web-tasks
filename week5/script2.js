function fun(event){
	document.querySelector('#bigImage img').src=event.currentTarget.src;
//event.currentTarget
}
for(var i=0;i<document.querySelector('#carousel').querySelectorAll('img').length;i++){
document.querySelector('#carousel').querySelectorAll('img')[i].addEventListener('click',fun);}