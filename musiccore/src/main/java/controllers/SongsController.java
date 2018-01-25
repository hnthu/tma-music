package controllers;

import models.Song;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class SongsController {
    @RequestMapping(method = RequestMethod.GET,value = "/songs")
    public List<Song> Songs() {
        Song song1 = new Song("Just the way you are","Country");
        ArrayList<Song> listSong = new ArrayList<>();
        listSong.add(song1);
        return listSong;
    }
    @RequestMapping(method = RequestMethod.GET,value = "/vipsongs")
    public List<Song> Vipsongs() {
        Song song1 = new Song("Vip song","Classical");
        song1.setUploadDate(new Date());
        ArrayList<Song> listSong = new ArrayList<>();
        listSong.add(song1);
        return listSong;
    }
}