package services.imps;
import models.Song;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import daos.SongDao;
import services.SongService;

@Service
public class SongServiceImp implements SongService {
    @Autowired
    private SongDao songDAO;

    public void setSongDao(SongDao songDAO) {
        this.songDAO = songDAO;
        }

    @Override
    @Transactional
    public void addSong(Song p) {
        this.songDAO.addSong(p);
        }

    @Override
    @Transactional
    public void updateSong(Song p) {
        this.songDAO.updateSong(p);
        }

    @Override
    @Transactional
    public List<Song> listSong() {
        return songDAO.listSong();
        }

    @Override
    @Transactional
    public Song getSongById(int id) {
        return this.songDAO.getSongById(id);
        }

    @Override
    @Transactional
    public void removeSong(int id) {
        this.songDAO.removeSong(id);
        }
}
