/*Countdown Part*/
function countdown(){
	let countDate= new Date('December 31, 2021 00:00:00').getTime();
	let now= new Date().getTime();
	let gap= countDate - now;
	
	let second= 1000;
	let minute= second*60;
	let hour= minute*60;
	let day= hour*24;
	
	let textday= Math.floor(gap / day);
	let texthour= Math.floor((gap % day)/ hour);
	let textminute= Math.floor((gap % hour)/ minute);
	let textsecond= Math.floor((gap % minute)/ second);
	
	document.querySelector('.days').innerHTML= textday;
	document.querySelector('.hours').innerHTML= texthour;
	document.querySelector('.minutes').innerHTML= textminute;
	document.querySelector('.seconds').innerHTML= textsecond;
};
setInterval(countdown, 1000);
/*Price Part*/
let anuallyButton=document.getElementById('anually-button')
let monthlyButton=document.getElementById('monthly-button')
function anually(){
	document.getElementById('basicprice').innerHTML='$199.99';
	document.getElementById('profprice').innerHTML='$249.99';
	document.getElementById('masterprice').innerHTML='$399.99';
	anuallyButton.style.backgroundColor='hsl(257, 27%, 26%)';
	anuallyButton.style.color='white';
	monthlyButton.style.backgroundColor='white';
	monthlyButton.style.color='hsl(257, 27%, 26%)';
	monthlyButton.style.border='1px solid hsl(257, 27%, 26%)';
}
function monthly(){
	document.getElementById('basicprice').innerHTML='$19.99';
	document.getElementById('profprice').innerHTML='$24.99';
	document.getElementById('masterprice').innerHTML='$39.99';
	monthlyButton.style.backgroundColor='hsl(257, 27%, 26%)';
	monthlyButton.style.color='white';
	anuallyButton.style.backgroundColor='white';
	anuallyButton.style.color='hsl(257, 27%, 26%)';
	anuallyButton.style.border='1px solid hsl(257, 27%, 26%)';
}
/*FAQ-Part*/
function firstarrow(){
	if (document.getElementById('expandanswer').style.display==='none'){
		document.getElementById('boldquestion').style.fontWeight='bold';
		document.querySelector('#rotatearrow').style.transform='rotate(180deg)';
		document.getElementById('expandanswer').style.display='block';
} else {
	document.getElementById('boldquestion').style.fontWeight='normal';
	document.querySelector('#rotatearrow').style.transform='rotate(0deg)';
	document.getElementById('expandanswer').style.display='none'
}
}
function secondarrow(){
	if (document.getElementById('secondexpandanswer').style.display==='none'){
		document.getElementById('secondboldquestion').style.fontWeight='bold';
		document.querySelector('#secondrotatearrow').style.transform='rotate(180deg)';
		document.getElementById('secondexpandanswer').style.display='block';
} else {
	document.getElementById('secondboldquestion').style.fontWeight='normal';
	document.querySelector('#secondrotatearrow').style.transform='rotate(0deg)';
	document.getElementById('secondexpandanswer').style.display='none'
}
}
function thirdarrow(){
	if (document.getElementById('thirdexpandanswer').style.display==='none'){
		document.getElementById('thirdboldquestion').style.fontWeight='bold';
		document.querySelector('#thirdrotatearrow').style.transform='rotate(180deg)';
		document.getElementById('thirdexpandanswer').style.display='block';
} else {
	document.getElementById('thirdboldquestion').style.fontWeight='normal';
	document.querySelector('#thirdrotatearrow').style.transform='rotate(0deg)';
	document.getElementById('thirdexpandanswer').style.display='none'
}
}
function fortharrow(){
	if (document.getElementById('forthexpandanswer').style.display==='none'){
		document.getElementById('forthboldquestion').style.fontWeight='bold';
		document.querySelector('#forthrotatearrow').style.transform='rotate(180deg)';
		document.getElementById('forthexpandanswer').style.display='block';
} else {
	document.getElementById('forthboldquestion').style.fontWeight='normal';
	document.querySelector('#forthrotatearrow').style.transform='rotate(0deg)';
	document.getElementById('forthexpandanswer').style.display='none'
}
}
function fiftharrow(){
	if (document.getElementById('fifthexpandanswer').style.display==='none'){
		document.getElementById('fifthboldquestion').style.fontWeight='bold';
		document.querySelector('#fifthrotatearrow').style.transform='rotate(180deg)';
		document.getElementById('fifthexpandanswer').style.display='block';
} else {
	document.getElementById('fifthboldquestion').style.fontWeight='normal';
	document.querySelector('#fifthrotatearrow').style.transform='rotate(0deg)';
	document.getElementById('fifthexpandanswer').style.display='none'
}
}
/*Login Part*/
function loginvalidation(){
	if(document.getElementById('username').value=== ""){
		document.getElementById('usernameerror').style.display='block'
	} else{
		document.getElementById('usernameerror').style.display='none'
	} 
	if(document.getElementById('password').value=== ""){
		document.getElementById('passworderror').style.display='block'
	} else{
		document.getElementById('passworderror').style.display='none'
	}
}
/*Sign up part*/
function signupvalidation(){
		if(document.getElementById('firstname').value=== ""){
		document.getElementById('firstnameerror').style.display='block'
	} else{
		document.getElementById('firstnameerror').style.display='none'
	} 
	if(document.getElementById('lastname').value=== ""){
		document.getElementById('lastnameerror').style.display='block'
	} else{
		document.getElementById('lastnameerror').style.display='none'
	}
	if(document.getElementById('username').value=== ""){
		document.getElementById('usernameerror').style.display='block'
	} else{
		document.getElementById('usernameerror').style.display='none'
	} 
	if(document.getElementById('password').value=== ""){
		document.getElementById('passworderror').style.display='block'
	} else{
		document.getElementById('passworderror').style.display='none'
	}
}