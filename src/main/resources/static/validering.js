function validerFornavn(fornavn){
    const regexp=/^[a-zæøåA-ZÆØÅ. \-]{2,20}$/;
    const ok=regexp.test(fornavn);

    if(!ok){
        $("#feilFornavn").html("Skriv fornavn.")
        return false;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }

}

function validerEtternavn(etternavn){
    const regexp=/^[a-zæøåA-ZÆØÅ. \-]{2,20}$/;
    const ok=regexp.test(etternavn);

    if(!ok){
        $("#feilEtternavn").html("Skriv etternavn.")
        return false;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }

}