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



    @PostMapping("/lagreBillet")
    public void lagreBillet(KinoBillet billet){
        rep.lagreBillet(billet);
    }

    @GetMapping("/hentBilletter")
    public List<KinoBillet> hentAlleBillet(){
        return rep.hentAlleBilleter();
    }

    @GetMapping("/hentEnBillett")
    public KinoBillet hentEnBillett(int id){
        return rep.hentEnBillett(id);
    }
    @PostMapping("/endreEnBillett")
    public void endreEnBillett(KinoBillet billet){
        rep.endreEnBillet(billet);
    }

    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        rep.slettEnBillett(id);
    }

    @GetMapping("/slettAlleBilletter")
    public void slettAlleBilletter(){
        rep.slettAlleBilleter();
    }
}

