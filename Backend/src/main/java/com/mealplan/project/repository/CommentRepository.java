package com.mealplan.project.repository;


import com.mealplan.project.entity.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Integer> {

    List<Comment> findByCommentId(int id);

}