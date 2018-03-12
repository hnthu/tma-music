package models;

import javax.persistence.*;
import java.util.Date;

//@Entity
//@Table(name = "song", catalog = "tmamusic", schema = "tmamusic")
public class Song {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column
    private String title;

//    @Column
    private Date uploadDate;
//    @Column
    private String genre;
    private String fileName;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Song() {
    }

    public Song(String title, String genre) {
        this.title = title;
        this.genre = genre;
    }

    public Song(String title, Date uploadDate, String genre, String fileName) {
        this.title = title;
        this.uploadDate = uploadDate;
        this.genre = genre;
        this.fileName = fileName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
