package com.mealplan.project.service;

import java.util.List;

import com.mealplan.project.entity.Comment;
import com.mealplan.project.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;


    //save a travel guide
    public Comment save(Comment meal){
        return this.commentRepository.save(meal);
    }

    //get All travel guides
    public List<Comment> getAll(){
        List<Comment> plans = (List<Comment>) this.commentRepository.findAll();
        return plans;
    }

    //get a travel guide from id
    public Comment getById(int id){
        return this.commentRepository.findByCommentId(id).get(0);
    }

    //update a travel guide from id
    public Comment update(int id, Comment comment){
        Comment g = this.commentRepository.findByCommentId(id).get(0);
        g.setComment(comment.getComment());
        g.setUserId(comment.getUserId());
        g.setMealPlanId(comment.getMealPlanId());

        return this.commentRepository.save(g);
    }

    //delete a travel guide from id
    public void delete(int id){
        this.commentRepository.deleteById(id);
    }

}
