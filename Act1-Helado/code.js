
dineroCofla = prompt("cuanto dinero tienes Cofla?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla, comprate el helado de agua");
	alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("cofla, comprate el helado de crema");
	alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla, comprate el helado de heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("cofla, comprate el helado de heladovich");
	alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla, comprate el helado de helardo");
	alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate helado con confetis o el pote de 1/4kg");
	alert("y te sobran" + (dineroCofla - 2.9));

} else {
	alert("Cofla Pobre de mierda");
}





if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con confetis o el pote de 1/4kg");

} else {
	alert("Roberto Pobre de mierda");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro, comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro, comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro, comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro, comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro, comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con confetis o un bote grande");

} else {
	alert("Pedro Pobre de mierda");
}
