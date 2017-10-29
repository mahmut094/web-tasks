function fun(){
	var s1 = document.querySelector('#s11').value;
	var s2 = document.querySelector('#s12').value;
	var s3 = document.querySelector('#s13').value;
	var s4 = document.querySelector('#s21').value;
	var s5 = document.querySelector('#s22').value;
	var s6 = document.querySelector('#s23').value;
	var s7 = document.querySelector('#s31').value;
	var s8 = document.querySelector('#s32').value;
	var s9 = document.querySelector('#s33').value;
    
    var res = (s1*s5*s9)+(s2*s6*s7)+(s4*s8*s3)-(s3*s5*s7)-(s1*s6*s8)-(s2*s4*s9);

    res=document.querySelector('#result').innerHTML;
}


document.querySelector('#determinant').addEventListener('click',fun);