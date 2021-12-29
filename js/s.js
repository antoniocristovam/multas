function calcular() {
    var velo = window.document.getElementById('txtvel');
    var resul = window.document.getElementById('resmulta')

    var txtvel = Number(velo.value);

    if (txtvel > 60) {
        resmulta.innerHTML = (`A sua velocidade é ${txtvel}Km/h Então você foi multado`);
    } else {
        resmulta.innerHTML = (`A sua velocidade é ${txtvel}Km/h Então você NÃO foi multado`);
    }
}