package com.mealplan.project.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int userId;

    @Column(name = "name")
    String name;
    @Column(name = "email")
    String email;

    @Column(name = "password")
    String password;

    @ElementCollection
    @CollectionTable(name = "userFollowers")
    @Column(name = "Follower")
    List<String> follower;

    public User() {
    }

    public User(int userId, String name, String email, String password, List<String> follower) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.follower = follower;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<String> getFollower() {
        return follower;
    }

    public void setFollower(List<String> follower) {
        this.follower = follower;
    }
}

