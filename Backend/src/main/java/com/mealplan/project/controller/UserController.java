package com.mealplan.project.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.mealplan.project.entity.CustomReturn;
import com.mealplan.project.entity.User;
import com.mealplan.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    //save
    @PostMapping("/save")
    public User saveGuide(
            @RequestParam(value = "name",required = false) String name,
            @RequestParam(value="email", required = false) String email,
            @RequestParam(value="password", required = false) String password
    ) throws IOException{
        User item = new User();
        item.setFollower(null);
        item.setName(name);
        item.setEmail(email);
        item.setPassword(password);

        return this.userService.save(item);
    }

    //get all travel guides
    @GetMapping("/getAll")
    public List<User> getAll(){
        return this.userService.getAll();
    }

    //get a travel guide from guide id
    @GetMapping("/get/{id}")
    public User getById(@PathVariable("id") int id){
        return this.userService.getById(id);
    }

    @GetMapping("/getByEmail/{email}")
    public User getByEmail(@PathVariable("email") String email){
        return this.userService.getByEmail(email);
    }

    //update a travel guide
    @PutMapping("/update/{id}")
    public CustomReturn update(
            @PathVariable("id") int id,
            @RequestParam(value = "follower",required = false) String followerId
    ){

        User user = this.userService.getById(id);
        List<String> currentFollowers = user.getFollower();
        boolean alreadyFollowed = false;

        for(String f : currentFollowers){
            if(Integer.parseInt(f) == Integer.parseInt(followerId)){
                alreadyFollowed = true;
            }
        }
        if(!alreadyFollowed){
            currentFollowers.add(followerId);
            user.setFollower(currentFollowers);
            User updatedUser = this.userService.update(id, user);
            return new CustomReturn("Followed", updatedUser);

        }else{
            currentFollowers.remove(followerId);
            user.setFollower(currentFollowers);
            User updatedUser = this.userService.update(id, user);
            return new CustomReturn("Unfollowed", updatedUser);
        }
    }

    //delete a travel guide from id
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") int id){
        this.userService.delete(id);
        return "deleted";
    }
}

