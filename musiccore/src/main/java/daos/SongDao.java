package daos;
import models.Song;
import java.util.List;

public interface  SongDao {
    public void addSong(Song p);
    public void updateSong(Song p);
    public List<Song> listSong();
    public Song getSongById(int id);
    public void removeSong(int id);
}

