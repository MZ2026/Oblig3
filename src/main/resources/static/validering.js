
function validerFilm(){
    const valgtFilm=$("#film").val();
    if(!valgtFilm){
        $("#feilFilm").html("Velg en film.".fontcolor("red"));
        return false;
    }
    else{
        $("#feilFilm").html("");
        return true;
    }
}

function validerAntall(antall){
   const regexp=/^[0-9]{1,99}$/;
   const ok=regexp.test(antall);
       if(!ok){
        $("#feilAntall").html("Velg antall billetter.".fontcolor("red"));
        return false;
    }
    else{
        $("#feilAntall").html("");
        return true;
    }
}

function validerFornavn(fornavn){
    const regexp=/^[a-zæøåA-ZÆØÅ. \-]{1,50}$/;
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
    const regexp=/^[a-zæøåA-ZÆØÅ. \-]{1,50}$/;
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
        $("#feilTelefonnr").html("Skriv en gyldig telefonnr(8 sifer).")
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
    const okFilm=validerFilm($("#film").val());
    const okAntall=validerAntall( $("#antall").val());
    const okFornavn=validerFornavn($("#fornavn").val());
    const okEtternavn=validerEtternavn($("#etternavn").val());
    const okTelefonnr=validerTelefonnr($("#telefonnr").val());
    const okEpost=validerEpost($("#epost").val());
    if(okFilm && okAntall && okFornavn && okEtternavn && okTelefonnr && okEpost){
        kjopBillett();
    }
}