//****************************************************************************************************************************************************
//****************************************************************************************************************************************************

function documentReady() {

  // insert HTML code
  document.getElementById("codeHtml").innerHTML = formateCode(`
<div>BA Zandpoort</div>

<div class="kaartje">
  <div class="shaduw">
    <div class="voorkant">
      
      <!-- DE VOORKANT VAN HET KAARTJE -->
      <div class="voorkant-titel">🎉 Hoeraaaaa 🎉</div>
      <div class="voorkant-ondertekst">Het is je verjaardag!</div>
      
    </div>
    <div class="achterkant">
      
      <!-- DE ACHTERKANT VAN HET KAARTJE -->
      <div class="achterkant-titel">🤪 Gefeliciteerd! </div>
      <p class="achterkant-tekst">
        Ik wens jou een heel leuke verjaardag, met véééél 🎁 💝!
        <br><br>
        Hopelijk hebben we dit jaar net zo veel plezier als vorig jaar!!! 😂 🎮 🤪
      </p>
      <div class="achterkant-naam">x NAAM x</div>
      
    </div>
  </div>
</div>
  
<div>Workshop Webdesign</div>

<!-- LETTER TYPES -->

<link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"> 

<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Josefin+Sans"/>
  `);

  // insert CSS code
  document.getElementById("codeCss").innerHTML = formateCode(`
/******************/
/* DE ACHTERGROND */
/******************/

body {
  /* achtergrond kleur */
  background-color: white; 
  /* grote van de tekst */
  font-size: 30px;
  /* tekst kleur */
  color: lightgrey; 
  /* letter type */
  font-family: 'Josefin Sans', sans-serif;
}

/****************************/
/* VOORKANT VAN HET KAARTJE */
/****************************/

.voorkant {
  /* afbeelding */
  background: url(http://www.hannemaes.be/bazandpoort/workshop-webdesign/images/achtergrond-verjaardag.jpg);
}

.voorkant-titel {
  /* tekst kleur */
  color: DarkTurquoise; 
  /* grote van de tekst */
  font-size: 70px; 
  /* afstand tekst en kaartje */
  margin-top: 30px; 
  /* tekst shaduw */
  text-shadow: 0px 0px 5px white; 
}

.voorkant-ondertekst{
  /* tekst kleur */
  color: pink; 
  /* grote van de tekst */
  font-size: 40px; 
  /* afstand tekst en kaartje */
  margin-bottom: 20px; 
  /* tekst shaduw */
  text-shadow: 0px 0px 5px black; 
}

/******************************/
/* ACHTERKANT VAN HET KAARTJE */
/******************************/

.achterkant {
  /* kleur kaartje */
  background-color: pink; 
  /* tekst kleur */
  color: black; 
}

.achterkant-titel {
  /* tekst kleur */
  color: white; 
  /* grote van de tekst */
  font-size: 50px; 
  /* afstand tekst en kaartje */
  margin-top: 50px; 
}

.achterkant-tekst {
  /* grote van de tekst */
  font-size: 25px; 
  /* afstand tekst en kaartje */
  margin: 50px; 
}

.achterkant-naam {
  /* tekst kleur */
  color: white; 
  /* grote van de tekst */
  font-size: 35px; 
  /* draaing van de naam */
  transform: rotate(7deg); 
  /* afstand tekst en kaartje */
  margin-bottom: 100px; 
}

/***************************/
/* DE REST VAN HET KAARTJE */
/***************************/

.kaartje {
  /* breedte van het kaartje */
  width: 700px; 
  /* hoogte van het kaartje */
  height: 500px; 
  /* letter type */
  font-family: 'Permanent Marker', cursive; 
  /* afstand tussen de letters */
  letter-spacing: 3px; 
}

.kaartje:hover .shaduw {
  /* hoe ver het kaartje draait */
  transform: rotateY(180deg); 
}

.shaduw {
  /* shaduw van het kaartje */
  box-shadow: 0px 0px 100px grey; 
}

/*************/
/* STRCUTUUR */
/*************/

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.kaartje {
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

.shaduw {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform-style: preserve-3d;
}

.voorkant, .achterkant {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.voorkant {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.achterkant {
  transform: rotateY(180deg);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
}        
  `);
}

//****************************************************************************************************************************************************

function formateCode(code) {
  return code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace('/@/g', '&amp;');
}

//****************************************************************************************************************************************************
