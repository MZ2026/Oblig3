package project.oblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Oblig3Controller {

    @Autowired
    private Oblig3Repository rep;

    // for å lagre billetter.
    @PostMapping("/lagreBillet")
    public void lagreBillet(KinoBillet billet){
        rep.lagreBillet(billet);
    }

    // GetMapping for å hente alle billetter.
    @GetMapping("/hentBilletter")
    public List<KinoBillet> hentAlleBillet(){
        return rep.hentAlleBilleter();
    }

    // hente en billet
    @GetMapping("/hentEnBillett")
    public KinoBillet hentEnBillett(int id){
        return rep.hentEnBillett(id);
    }

    // endre en billet
    @PostMapping("/endreEnBillett")
    public void endreEnBillett(KinoBillet billet){
        rep.endreEnBillet(billet);
    }

    // slette en billet
    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        rep.slettEnBillett(id);
    }

    // slette alle billetter
    @GetMapping("/slettAlleBilletter")
    public void slettAlleBilletter(){
        rep.slettAlleBilleter();
    }
}

