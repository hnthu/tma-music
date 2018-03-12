package controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import common.message.Message;
import common.message.SuccessMessage;
import models.Song;
import org.apache.commons.io.FileUtils;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.ServletException;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@RestController
public class SongsController {

    private Message meassage;

    @RequestMapping(method = RequestMethod.GET,value = "/songs")
    @PreAuthorize("hasAnyAuthority(\"ROLE_USER\",\"ROLE_ADMIN\")")
    public List<Song> Songs() {
        Song song1 = new Song("Just the way you are","Country");
        ArrayList<Song> listSong = new ArrayList<>();
        listSong.add(song1);
        return listSong;
    }
    @RequestMapping(method = RequestMethod.GET,value = "/vipsongs")
    @PreAuthorize("hasAnyAuthority(\"ROLE_ADMIN\")")
    public List<Song> Vipsongs() {
        Song song1 = new Song("Vip song","Classical");
        song1.setUploadDate(new Date());
        ArrayList<Song> listSong = new ArrayList<>();
        listSong.add(song1);
        return listSong;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/songs")
    public ResponseEntity<Object> createNewSong(@RequestPart("file") MultipartHttpServletRequest request) throws IOException, ServletException {
        Iterator<String> fileNames = request.getFileNames();
//        Iterator<Part> parts = request.getParts().iterator();
//        for (Iterator<Part> it = parts; it.hasNext(); ) {
//            Part part = it.next();
//            if(part.getContentType().equals(MediaType.APPLICATION_JSON_UTF8_VALUE) || part.getContentType().equals(MediaType.APPLICATION_JSON_VALUE)) {
//                Song song = GsonBuilderUtils.gsonBuilderWithBase64EncodedByteArrays().create().fromJson(part.getInputStream().toString(), Song.class);
//
//            }
//        }
        File dir = new File("classpath:/song");
        for (Iterator<String> it = fileNames; it.hasNext();){
            MultipartFile file = request.getFile(it.next());
            String fileName = file.getOriginalFilename();
            Files.copy(file.getInputStream(), Paths.get(dir.getAbsolutePath(), fileName), StandardCopyOption.REPLACE_EXISTING);
        }
        return ResponseEntity.ok(SuccessMessage.success());
    }
}