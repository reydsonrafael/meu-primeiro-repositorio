//DESAFIO CLASIFICADOR DE NÍVEL DE HERÓI//
//__________________________________//

const heroName = "Kurosaki Ichigo"
let xp = 9999
let msg = ", seu nivel atual é: "
let msg2 = " treine para subir no ranking!"
let msgEspecial = " Você atingiu o nivel max. agora és o melhor dos melhores!"

if (xp <= 1000) { console.log(heroName + msg + "Ferro!"); console.log(msg2);}

else if (xp <= 2000) {console.log(heroName + msg + "Bronze!"); console.log(msg2);}

else if (xp <= 5000) {console.log(heroName + msg + "Prata Ouro!"); console.log(msg2);}

else if (xp <= 8000) {console.log(heroName + msg + "Platina Diamante!"); console.log(msg2);}

else if (xp <= 9000) {console.log(heroName + msg + "Ascendente!"); console.log(msg2);}

else if (xp <= 10000) {console.log(heroName + msg + "Imortal!"); console.log(msg2);}

else if (xp > 10001) {console.log(heroName + msg + "Deus!"); console.log(msgEspecial);}
