package com.mealplan.project.repository;

import com.mealplan.project.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    List<User> findByUserId(int id);
    List<User> findByEmail(String email);
}