package project.oblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class Oblig3Repository {

    @Autowired
    private JdbcTemplate db;


    // en metode for å lagre billet in database
    public void lagreBillet(KinoBillet billet){
        String sql="INSERT INTO KinoBillet(film, antall,fornavn,etternavn,telefonnr,epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,billet.getFilm(),billet.getAntall(),billet.getFornavn(),billet.getEtternavn(),billet.getTelefonnr(),billet.getEpost());
    }

    // en metode for å hente alle billetter fra databasen.
    public List<KinoBillet> hentAlleBilleter(){
        String sql="SELECT * FROM KinoBillet ORDER BY etternavn";
        List<KinoBillet> alleBilleter=db.query(sql,new BeanPropertyRowMapper(KinoBillet.class));
        return alleBilleter;
    }


    // metode for å hente en billet basert på id.
    public KinoBillet hentEnBillett(int id){
        //Object[] param=new Object[1];
        // param[0]=id;
        String sql="SELECT * FROM KinoBillet WHERE id=?";
        List<KinoBillet> enBillet=db.query(sql, new BeanPropertyRowMapper(KinoBillet.class),id);
        return enBillet.get(0);
    }


    // endre en billet i databasen
    public void endreEnBillet(KinoBillet billet){
        String sql="UPDATE KinoBillet SET film=?, antall=?, fornavn=?, etternavn=?, telefonnr=?, epost=? WHERE id=?";
        db.update(sql,billet.getFilm(),billet.getAntall(),billet.getFornavn(),billet.getEtternavn(),billet.getTelefonnr(),billet.getEpost(),billet.getId());
    }

    //slette en billet basert på id.
    public void slettEnBillett(int id){
        String sql="DELETE FROM KinoBillet WHERE id=?";
        db.update(sql,id);
    }

   // slette alle billetter fra databasen
    public void slettAlleBilleter(){
        String sql="DELETE FROM KinoBillet";
        db.update(sql);
    }

}