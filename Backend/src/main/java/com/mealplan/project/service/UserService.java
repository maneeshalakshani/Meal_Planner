package com.mealplan.project.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import com.mealplan.project.entity.User;
import com.mealplan.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;


@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;


    //save a travel guide
    public User save(User guide){
        return this.userRepository.save(guide);
    }

    //get All travel guides
    public List<User> getAll(){
        List<User> guides = (List<User>) this.userRepository.findAll();
        return guides;
    }

    //get a travel guide from id
    public User getById(int id){
        return this.userRepository.findByUserId(id).get(0);
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email).get(0);
    }

    //update a travel guide from id
    public User update(int guideId, User guide){
        User g = this.userRepository.findByUserId(guideId).get(0);
        g.setName(guide.getName());
        g.setEmail(guide.getEmail());
        g.setPassword(guide.getPassword());
        g.setFollower(guide.getFollower());

        return this.userRepository.save(g);
    }

    //delete a travel guide from id
    public void delete(int guideId){
        this.userRepository.deleteById(guideId);
    }

    //upload images
    public String uploadImage(String path, MultipartFile file) throws IOException{
        String name = file.getOriginalFilename();
        String randomID = UUID.randomUUID().toString();
        String newFileName = randomID.concat(name.substring(name.lastIndexOf(".")));

        String filePath = path + File.separator + newFileName;
        File f = new File(path);
        if(!f.exists()){
            f.mkdir();
        }
        Files.copy(file.getInputStream(), Paths.get(filePath));

        return filePath;
    }
}
