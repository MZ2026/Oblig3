$(function(){

    const id=window.location.search.substring(1);
    $.get("/hentEnBillett?id="+id,function(enBillett){
        $("#id").val(enBillett.id);
        $("#film").val(enBillett.film);
        $("#antall").val(enBillett.antall);
        $("#fornavn").val(enBillett.fornavn);
        $("#etternavn").val(enBillett.etternavn);
        $("#telefonnr").val(enBillett.telefonnr);
        $("#epost").val(enBillett.epost);
    });
});

function endreBilletten() {
    const billett = {
        id: $("#id").val(),
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    };

    $.post("/endreEnBillett", billett, function () {
    });
    window.location.href="index.html";

}

