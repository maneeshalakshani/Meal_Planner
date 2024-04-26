package com.mealplan.project.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.mealplan.project.entity.Comment;
import com.mealplan.project.entity.MealPlan;
import com.mealplan.project.service.CommentService;
import com.mealplan.project.service.MealPlanService;
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
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "*")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private MealPlanService mealPlanService;

    //save travel guide controller
    @PostMapping("/save")
    public Comment saveGuide(
            @RequestParam(value = "mealplanId", required = false) Integer mealplanId,
            @RequestParam(value="comment", required = false) String comment,
            @RequestParam(value="userId", required = false) String userId
    ) throws IOException{
        Comment item = new Comment();

        if (mealplanId != null) {
            item.setMealPlanId(mealplanId.intValue());
        }
        item.setComment(comment);
        item.setUserId(userId);

        return this.commentService.save(item);
    }

    //get all travel guides
    @GetMapping("/getAll")
    public List<Comment> getAll(){
        return this.commentService.getAll();
    }

    @GetMapping("/getAllWithMealPlan/{id}")
    public List<Comment> getAllWithMealPlan( @PathVariable("id") int id ){
        List<Comment> allComments = this.commentService.getAll();
        List<Comment> selectedComments = new ArrayList<>();
        for (Comment cmnt : allComments) {
            if(cmnt.getMealPlanId() == id){
               selectedComments.add(cmnt);
            }
        }
        return selectedComments;
    }

    //get a travel guide from guide id
    @GetMapping("/get/{id}")
    public Comment getById(@PathVariable("id") int id){
        return this.commentService.getById(id);
    }

    //update a travel guide
    @PutMapping("/update/{id}")
    public Comment update(
            @PathVariable("id") int id,
            @RequestParam(value = "mealplanId",required = false) Integer mealplanId,
            @RequestParam(value="comment", required = false) String comment,
            @RequestParam(value="userId", required = false) String userId
    ) throws IOException{
        Comment item = new Comment();
        item.setMealPlanId(mealplanId.intValue());
        item.setComment(comment);
        item.setUserId(userId);

        return this.commentService.update(id, item);
    }

    //delete a travel guide from id
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") int id){
        this.commentService.delete(id);
        return "Deleted";
    }
}

