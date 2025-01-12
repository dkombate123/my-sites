var scoreTmp=0;
var scoreActuel=[0,0];
var indexPlayer=1;
var boolPlayer=true;
var numberTmp=0;
var randomNumber=Math.floor(Math.random()*6)+1;//genere un nombre compris entre 1 et 8

document.getElementsByClassName("score-1").textContent="0";
document.getElementsByClassName("score-2").textContent="0";
document.getElementsByClassName("current-score-1").textContent="0";
document.getElementsByClassName("current-score-2").textContent="0";
document.querySelector(".btn-roll").addEventListener("click",function () {
	if (boolPlayer==true) {
		var randomNumber=Math.floor(Math.random()*6)+1;
		document.querySelector(".image-roll").src="pics/"+randomNumber+".png";
		// ajout du score
		if (randomNumber==1 && numberTmp==6) {
			scoreTmp+=200;
			document.querySelector(".current-score-"+indexPlayer).textContent=scoreTmp;
		}
		 else if (randomNumber==4)  {
		 	scoreTmp+=30;
			document.querySelector(".current-score-"+indexPlayer).textContent=scoreTmp;

		 }
		 else if (randomNumber!=5) {
		 	scoreTmp+=randomNumber;
			document.querySelector(".current-score-"+indexPlayer).textContent=scoreTmp;


		 }else{
		 	indexPlayer===1 ? indexPlayer=2 : indexPlayer=1;
		 	scoreTmp=0;
			
		 	document.querySelector(".current-score-1").textContent="0";
		 	document.querySelector(".current-score-2").textContent="0";

		 	var elm1=document.querySelector(".part1").firstChild;
		 	var elm2=document.querySelector(".part2").firstChild;
		 	elm1.classList.toggle("active");
		 	elm2.classList.toggle("active");
		 	
		 	

		 }
		 numberTmp=randomNumber;
		 
		 }
	});

	document.querySelector(".btn-hold").addEventListener("click",function () {
		if (boolPlayer==true) {
				scoreActuel[indexPlayer-1]+=scoreTmp;
				document.querySelector(".score-"+indexPlayer).textContent=scoreActuel[indexPlayer-1];
			if (scoreActuel[indexPlayer-1]>=200) {
				document.querySelector(".name-"+indexPlayer).textContent="Winner!";
				var elm1=document.querySelector(".part1").firstChild;
			 	var elm2=document.querySelector(".part2").firstChild;
				elm1.classList.remove("active");
			 	elm2.classList.remove("active");
			 	boolPlayer=false;
				}
	
	 	
				
			else{
				indexPlayer===1 ? indexPlayer=2 : indexPlayer=1;
				scoreTmp=0;
				document.querySelector(".current-score-1").textContent="0";
			 	document.querySelector(".current-score-2").textContent="0";

			 	var elm1=document.querySelector(".part1").firstChild;
			 	var elm2=document.querySelector(".part2").firstChild;
			 	elm1.classList.toggle("active");
			 	elm2.classList.toggle("active");
			 	
			}
	} 
	
});
