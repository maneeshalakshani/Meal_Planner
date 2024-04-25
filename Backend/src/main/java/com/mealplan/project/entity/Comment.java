package com.mealplan.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int commentId;

//    @ManyToOne
//    @JoinColumn(name = "meal_plan_id")
//    private MealPlan mealPlan;

    @Column(name = "meal_plan_id")
    int mealPlanId;

    @Column(name = "Comment")
    String Comment;

    @Column(name = "CommentedUser")
    String userId;

    public Comment(int commentId, String comment, String userId) {
        this.commentId = commentId;
        Comment = comment;
        this.userId = userId;
    }

    public Comment() {
        super();
    }

    public int getMealPlanId() {
        return mealPlanId;
    }

    public void setMealPlanId(int mealPlanId) {
        this.mealPlanId = mealPlanId;
    }

    //    public MealPlan getMealPlan() {
//        return mealPlan;
//    }
//
//    public void setMealPlan(MealPlan mealPlan) {
//        this.mealPlan = mealPlan;
//    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
