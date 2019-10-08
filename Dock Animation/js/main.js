window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const onClick = event =>{
	console.log("clicked!!");
	console.log(event.clientX);
}

const onMouseMove = event =>{
	MIN = 64 ;  // longueur minimum en pixel
	MAX = 128 ; // longueur maximum en pixel

	y = event.clientY - document.getElementById('myElement').offsetTop;  // coordonnées y de la souris à partir du début de la section
	imgs = document.getElementById('myElement').getElementsByTagName('img') ; // toutes les images du div sont modifiables grâce a imgs[index de l'image]
	for(i=0 ; i<imgs.length ; i++) // on parcourt toutes les images
	{
		millieuImg = imgs[i].offsetTop + parseInt(imgs[i].style.height,10)/2 ; //Récupère la coordonnée en ordonnée du milieu d'une image à partir du début de la section

		yDiffCarre = millieuImg - y ; // écart entre le millieu d'une image et la position du pointeur

		yDiffCarre = Math.abs(yDiffCarre); 

		coeff = yDiffCarre * -0.4 + MAX; // Courbe de grossissement des images

		if (coeff < MIN) coeff = MIN ; //Ne pas dépasser les tailles minimum et maximum des images
		else if (coeff > MAX) coeff = MAX ;
		imgs[i].style.width = coeff + "px";
		imgs[i].style.height = coeff + "px";

		opac = 1 - (yDiffCarre/200); // varie l'opacité en fonction de la distance entre le pointeur et les images
		if (opac > 0.1) // avec un minimum
			imgs[i].style.opacity = opac;
		else imgs[i].style.opacity = 0.1;


	}
	//console.log(delta);
}

const main = event => {

	var sautDeLigne = document.createElement('br');
	let myElement = document.createElement('div');

	document.body.appendChild(myElement);

	myElement.style.position="fixed";
	myElement.style.left="50px";
	myElement.style.top="10px";
	myElement.id="myElement";
	//myElement.style.width="50px";
	//myElement.style.height="50px";
	//myElement.style.backgroundColor="#0000FF";

	myElement.addEventListener("click",onClick);
	myElement.addEventListener("mousemove",onMouseMove);
	//document.body.onmousemove = event => {
  	//console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);
	//}

	let myImage1 = document.createElement("img");
	myImage1.src="assets/1.png";
	myImage1.style.width="64px";
	myImage1.style.height="64px";
	myImage1.style.opacity=0.1;

	let myImage2 = document.createElement("img");
	myImage2.src="assets/2.png";
	myImage2.style.width="64px";
	myImage2.style.height="64px";
	myImage2.style.opacity=0.1;
	//myImage2.align="top";

	let myImage3 = document.createElement("img");
	myImage3.src="assets/3.png";
	myImage3.style.width="64px";
	myImage3.style.height="64px";
	myImage3.style.opacity=0.1;

	let myImage4 = document.createElement("img");
	myImage4.src="assets/4.png";
	myImage4.style.width="64px";
	myImage4.style.height="64px";
	myImage4.style.opacity=0.1;

	let myImage5 = document.createElement("img");
	myImage5.src="assets/5.png";
	myImage5.style.width="64px";
	myImage5.style.height="64px";
	myImage5.style.opacity=0.1;

	let myImage6 = document.createElement("img");
	myImage6.src="assets/6.png";
	myImage6.style.width="64px";
	myImage6.style.height="64px";
	myImage6.style.opacity=0.1;

	let myImage7 = document.createElement("img");
	myImage7.src="assets/7.png";
	myImage7.style.width="64px";
	myImage7.style.height="64px";
	myImage7.style.opacity=0.1;

	let myImage8 = document.createElement("img");
	myImage8.src="assets/8.png";
	myImage8.style.width="64px";
	myImage8.style.height="64px";
	myImage8.style.opacity=0.1;

	let myImage9 = document.createElement("img");
	myImage9.src="assets/9.png";
	myImage9.style.width="64px";
	myImage9.style.height="64px";
	myImage9.style.opacity=0.1;

	let myImage10 = document.createElement("img");
	myImage10.src="assets/10.png";
	myImage10.style.width="64px";
	myImage10.style.height="64px";
	myImage10.style.opacity=0.1;

	myElement.appendChild(myImage1);
	myElement.appendChild(sautDeLigne);
	myElement.appendChild(myImage2);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage3);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage4);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage5);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage6);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage7);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage8);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage9);
	myElement.appendChild(sautDeLigne.cloneNode());
	myElement.appendChild(myImage10);

}