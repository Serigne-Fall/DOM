document.querySelector('#a-supprimer').remove();
let monHeader=document.createElement('header');
let h1=document.createElement('h1');
h1.textContent="Bienvenue";
h1.style.color='#ffff';
monHeader.append(h1);
monHeader.style.textAlign='center';
monHeader.style.backgroundColor='#e3b04b';
monHeader.style.padding='30px';
document.body.append(monHeader);

let sousHeader=document.createElement('div');
let lienAcceuil=document.createElement('a');
let lienOtherPage=document.createElement('a');

lienAcceuil.setAttribute('href','#');
lienOtherPage.setAttribute('href','#');

lienAcceuil.textContent='Acceuil';
lienOtherPage.textContent='Une autre page';



sousHeader.style.backgroundColor='#f1d6ab';
sousHeader.style.padding='15px';
document.body.append(sousHeader);

sousHeader.append(lienAcceuil);
sousHeader.append(' / ');
sousHeader.append(lienOtherPage);



let p=document.createElement('p');
p.textContent="ceci est un paragraph créé pqr JavaScript";
document.body.append(p);
p.style.padding="15px";