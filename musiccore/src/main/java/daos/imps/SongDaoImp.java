package daos.imps;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import models.Song;
import daos.SongDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.stereotype.Repository;

import javax.transaction.TransactionManager;
import javax.transaction.Transactional;

@Repository
@Transactional
public class SongDaoImp implements SongDao {

    private static final Logger logger = LoggerFactory.getLogger(SongDaoImp.class);
    @Autowired
    private HibernateTransactionManager manager;

    @Override
    public void addSong(Song p) {
        Session session = this.manager.getSessionFactory().getCurrentSession();
        session.persist(p);
        logger.info("Song saved successfully, Song Details="+p);
    }

    @Override
    public void updateSong(Song p) {
        Session session = this.manager.getSessionFactory().getCurrentSession();
        session.update(p);
        logger.info("Song updated successfully, Song Details="+p);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Song> listSong() {
        Session session = this.manager.getSessionFactory().getCurrentSession();
        List<Song> songList = session.createQuery("from Song").list();
        for(Song p : songList){
            logger.info("Song List::"+p);
        }
        return songList;
    }

    @Override
    public Song getSongById(int id) {
        Session session = this.manager.getSessionFactory().getCurrentSession();
        Song p = (Song) session.load(Song.class, new Integer(id));
        logger.info("Song loaded successfully, Song details="+p);
        return p;
    }

    @Override
    public void removeSong(int id) {
        Session session = this.manager.getSessionFactory().getCurrentSession();
        Song p = (Song) session.get(Song.class, id);
        if(null != p){
            session.delete(p);
        }
        logger.info("Song deleted successfully, song details="+p);
    }
}
