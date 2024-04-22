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

function validerTelefonnr(telefonnr){
    const regexp=/^[0-9]{8}$/;
    const ok=regexp.test(telefonnr);

    if(!ok){
        $("#feilTelefonnr").html("Skriv en gyldig telefonnr.")
        return false;
    }
    else {
        $("#feilTelefonnr").html("");
        return true;
    }

}

function validerEpost(epost){
    const regexp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok=regexp.test(epost);

    if(!ok){
        $("#feilEpost").html("Skriv en gyldig epost.")
        return false;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }

}

function validerAlleFelter(){
    const okFornavn=validerFornavn($("#fornavn").val());
    const okEtternavn=validerEtternavn($("#etternavn").val());
    const okTelefonnr=validerTelefonnr($("#telefonnr").val());
    const okEpost=validerEpost($("#epost").val());
    if(okFornavn && okEtternavn && okTelefonnr && okEpost){
        kjopBillett();
    }
}