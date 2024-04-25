package com.mealplan.project.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mealPlan")
public class MealPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int planId;

    @Column(name = "PlanName")
    String planName;
    @Column(name = "Preference")
    String preference;
    @ElementCollection
//    @CollectionTable(name = "Ingredients")
    @Column(name = "ingredientName")
    List<String> ingredientName;

    @ElementCollection
//    @CollectionTable(name = "GuideLanguages")
    @Column(name = "instructions")
    List<String> instructions;

    @Column(name="portion")
    int portion;

    @Column(name="info")
    String info;

    @Column(name="Image")
    String image;

//    @OneToMany(mappedBy = "mealPlan", cascade = CascadeType.ALL)
//    private List<Comment> comments;

    public MealPlan(){
        super();
    }

    public MealPlan(int planId, String planName, String preference, List<String> ingredientName, ArrayList<String> instructions, int portion, String info, String image){
        this.planName = planName;
        this.preference = preference;
        this.ingredientName = ingredientName;
        this.instructions = instructions;
        this.portion = portion;
        this.info = info;
        this.image = image;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public void setPreference(String preference) {
        this.preference = preference;
    }

    public void setIngredientName(List<String> ingredientName) {
        this.ingredientName = ingredientName;
    }

    public void setInstructions(List<String> instructions) {
        this.instructions = instructions;
    }

    public void setPortion(int portion) {
        this.portion = portion;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImage() {
        return image;
    }
    public int getPlanId() {
        return planId;
    }

    public String getPlanName() {
        return planName;
    }

    public String getPreference() {
        return preference;
    }

    public List<String> getIngredientName() {
        return ingredientName;
    }

    public List<String> getInstructions() {
        return instructions;
    }

    public int getPortion() {
        return portion;
    }

    public String getInfo() {
        return info;
    }

//    public List<Comment> getComments() {
//        return comments;
//    }
//
//    public void setComments(List<Comment> comments) {
//        this.comments = comments;
//    }
}

