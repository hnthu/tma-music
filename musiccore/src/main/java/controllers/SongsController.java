package controllers;

import models.Song;
import services.SongService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongsController {
    private SongService songService;

    @Autowired(required=true)
    public void setSongService(SongService ps){
        this.songService = ps;
    }

    @RequestMapping(value = "/song", method = RequestMethod.GET)
    @PreAuthorize("permitAll()")
    public Object listSong(Model model) {

        return this.songService.listSong();
    }

    //For add and update song both
    @RequestMapping(value= "/song/add", method = RequestMethod.POST)
    @PreAuthorize("permitAll()")
    public String addSong(@ModelAttribute("song") Song p){

        if(p.getId() == 0){
            //new person, add it
            this.songService.addSong(p);
        }else{
            //existing songsss, call update
            this.songService.updateSong(p);
        }

        return "redirect:/song";

    }

    @RequestMapping("/remove/{id}")
    @PreAuthorize("permitAll()")
    public String removeSong(@PathVariable("id") int id){

        this.songService.removeSong(id);
        System.out.print("" + id);
        return "something";
    }

    @RequestMapping("/edit/{id}")
    @PreAuthorize("permitAll()")
    public Object editSong(@PathVariable("id") int id, Model model){
        Song a = this.songService.getSongById(id);
        this.songService.updateSong(a);
        return "Updated successfully";
    }

    @RequestMapping("/get/{id}")
    @PreAuthorize("permitAll()")
    public String getSong(@PathVariable("id") int id, Model model){
        model.addAttribute("song", this.songService.getSongById(id));
        return "song";
    }
}