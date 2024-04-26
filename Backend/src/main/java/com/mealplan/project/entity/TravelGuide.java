//package com.mealplan.project.entity;
//
//import jakarta.persistence.*;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name = "travelguide")
//public class TravelGuide {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    int guideId;
//
//    @Column(name = "GuideName")
//    String guideName;
//    @Column(name = "GuideLevel")
//    int guideLevel;
//    @Column(name = "GuideAge")
//    int age;
//
//    @ElementCollection
//    @CollectionTable(name = "GuideLanguages")
//    @Column(name = "language")
//    private List<String> languages;
//
//    @Column(name="GuideImage")
//    String guideImage;
//
//    public TravelGuide(){
//        super();
//    }
//
//    public TravelGuide(int guideId, String guideName, int guideLevel, int age, ArrayList<String> languages, String guideImage){
//        this.age = age;
//        this.guideLevel = guideLevel;
//        this.guideName = guideName;
//        this.languages = languages;
//        this.guideImage = guideImage;
//    }
//
//    public void setGuideImage(String guideImage){
//        this.guideImage = guideImage;
//    }
//
//    public String getGuideImage(){
//        return this.guideImage;
//    }
//
//    public void setLanguages(List<String> languages){
//        this.languages = languages;
//    }
//
//    public List<String> getLanguages(){
//        return this.languages;
//    }
//
//    public void setGuideId(int guideId){
//        this.guideId = guideId;
//    }
//
//    public int getGuideId(){
//        return this.guideId;
//    }
//
//    public void setGuideLevel(int guideLevel){
//        this.guideLevel = guideLevel;
//    }
//
//    public int getGuideLevel(){
//        return this.guideLevel;
//    }
//
//    public void setAge(int age){
//        this.age = age;
//    }
//
//    public int getAge(){
//        return this.age;
//    }
//
//    public void setGuideName(String guideName){
//        this.guideName = guideName;
//    }
//
//    public String getGuideName(){
//        return this.guideName;
//    }
//
//    @Override
//    public String toString() {
//        return "TravelGuide [guideId=" + guideId + ", guideName=" + guideName + ", guideLevel=" + guideLevel + ", age=" + age + "]";
//    }
//}
//
