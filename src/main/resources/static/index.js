$(function(){
    hentAlleBilletter();                //a  function to load all tickets
});

function kjopBillett(){                 //take info from input fields
    const billett={
        film:$("#film").val(),
        antall:$("#antall").val(),
        fornavn:$("#fornavn").val(),
        etternavn:$("#etternavn").val(),
        telefonnr:$("#telefonnr").val(),
        epost:$("#epost").val()
    };

    $.post("/lagreBillet",billett,function(){   // used post to save data about tickets
        hentAlleBilletter();
    });

    $("#film").val("");      //to clear input fields after buying
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

}

function hentAlleBilletter(){   // to call tickets from the server
    $.get("/hentBilletter",function(data){
        formaterData(data);
    });
}

function formaterData(billetter){                     // display all information about tickets to the page
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

function endreBilletten(id){            // a function to take the user to a page to edit the ticket
    window.location.href="/endre.html?"+id;
}

function slettEnBillett(id){             // a function to delete only one ticket not all
    $.get("/slettEnBillett?id="+id,function(){
        window.location.href='index.html';
    })
}

function slettBilletter(){                // delete all tickets
    $.get("/slettAlleBilletter",function(){
        hentAlleBilletter();
    })
}