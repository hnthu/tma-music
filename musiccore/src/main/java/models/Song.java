package models;

import java.util.Date;

public class Song {
    private String title;
    private Date uploadDate;
    private String genre;

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

    public Song(String title, Date uploadDate, String genre) {
        this.title = title;
        this.uploadDate = uploadDate;
        this.genre = genre;
    }
}
