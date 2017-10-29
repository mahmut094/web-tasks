function fun(){
	var a=document.querySelector('#name').value;
	var b=document.querySelector('#surname').value;
	var c=document.querySelector('#faculty').value;
	var d=document.createElement('td');
	d.append(a);
	var e=document.createElement('td');
	e.append(b);
	var f=document.createElement('td');
	f.append(c);
	var g=document.createElement('tr');
	g.append(d);
	g.append(e);
	g.append(f);
	var h=document.querySelector('table');
	h.append(g);
	console.log(d);
	console.log(e);
	console.log(f);
	console.log(g);
}
document.querySelector('#addStudent').addEventListener('click',fun);