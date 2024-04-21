$(function(){
    hentAlleBilletter();
});

function kjopBillett(){
    const billett={
        film:$("#film").val(),
        antall:$("#antall").val(),
        fornavn:$("#fornavn").val(),
        etternavn:$("#etternavn").val(),
        telefonnr:$("#telefonnr").val(),
        epost:$("#epost").val()
    };

    $.post("/lagreBillet",billett,function(){
        hentAlleBilletter();
    });

    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

}

function hentAlleBilletter(){
    $.get("/hentBilletter",function(data){
        formaterData(data);
    });
}

function formaterData(billetter){
    let ut="<table class='table table-striped table-bordered'><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternnavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>" +
        "<th></th><th></th>" +
        "</tr>";
    for(const i of billetter){
        ut+="<tr><td>"+i.film+"</td><td>"+i.antall+"</td><td>"+i.fornavn+"</td>" +
            "<td>"+i.etternavn+"</td><td>"+i.telefonnr+"</td><td>"+i.epost+"</td>" +
            "<td><button class='btn btn-primary' onclick='endreBilletten("+i.id+")'>Endre</button> </td>"+
            "<td><button class='btn btn-danger' onclick='slettEnBillett("+i.id+")'>Slett</button></td></tr>";
    }
    ut+="</table>";
    $("#billettene").html(ut);
}

function endreBilletten(id){
    window.location.href="/endre.html?"+id;
}

function slettEnBillett(id){
    $.get("/slettEnBillett?id="+id,function(){
        window.location.href='index.html';
    })
}

function slettBilletter(){
    $.get("/slettAlleBilletter",function(){
        hentAlleBilletter();
    })
}