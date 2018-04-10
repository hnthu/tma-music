package services;
import models.Song;
import java.util.List;

public interface SongService {
    public void addSong(Song p);
    public void updateSong(Song p);
    public List<Song> listSong();
    public Song getSongById(int id);
    public void removeSong(int id);
}