$(function(){
    hentAlleBilletter();                // en funksjon for å laste alle billetter
});

function kjopBillett(){                 //tar info fra input
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

    $("#film").val("");      // tommer input felter
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

}

function hentAlleBilletter(){   // kaller billetter fra serveren
    $.get("/hentBilletter",function(data){
        formaterData(data);
    });
}

function formaterData(billetter){                     // viser billetter med info på skjermen
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

function endreBilletten(id){            // en funksjon for å endre en billet
    window.location.href="/endre.html?"+id;
}

function slettEnBillett(id){             // en funksjon for å slette en billett
    $.get("/slettEnBillett?id="+id,function(){
        window.location.href='index.html';
    })
}

function slettBilletter(){                // slette alle billetter
    $.get("/slettAlleBilletter",function(){
        hentAlleBilletter();
    })
}