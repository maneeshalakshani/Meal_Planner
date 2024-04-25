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
@RequestMapping("/meal")
@CrossOrigin(origins = "*")
public class MealPlanController {

    @Autowired
    private MealPlanService mealPlanServiceService;

    @Autowired
    private CommentService commentService;

    @Value("${project.image}")
    private String path;

    //save travel guide controller
    @PostMapping("/save")
    public MealPlan saveGuide(
            @RequestParam(value = "photo",required = false) MultipartFile image,
            @RequestParam(value="planName", required = false) String planName,
            @RequestParam(value="preference", required = false) String preference,
            @RequestParam(value="ingredientName", required = false) String ingredientName,
            @RequestParam(value="instructions", required = false) String instructions,
            @RequestParam(value="info", required = false) String info,
            @RequestParam(value="portion", required = false) String portion
    ) throws IOException{
        MealPlan meal = new MealPlan();
        meal.setPortion(Integer.parseInt(portion));
        meal.setPlanName(planName);
        meal.setPreference(preference);
        ArrayList<String> ingredientsArr = new ArrayList<>(Arrays.asList(ingredientName.replace("[","").replace("]","").split(",")));
        meal.setIngredientName(ingredientsArr);
        ArrayList<String> instructionArr = new ArrayList<>(Arrays.asList(instructions.replace("[","").replace("]","").split(",")));
        meal.setInstructions(instructionArr);
        meal.setInfo(info);
//        meal.setComment(null);

        String filePath = this.mealPlanServiceService.uploadImage(path, image);
//        filePath = "../../".concat(filePath.substring(filePath.lastIndexOf("assets/")));
        filePath = filePath.replace("\\", "");

        meal.setImage(filePath);
        return this.mealPlanServiceService.save(meal);
    }

    //get all travel guides
    @GetMapping("/getAll")
    public List<MealPlan> getAll(){
        return this.mealPlanServiceService.getAll();
    }

    //get a travel guide from guide id
    @GetMapping("/get/{id}")
    public MealPlan getById(@PathVariable("id") int id){
        return this.mealPlanServiceService.getById(id);
    }

    //update a travel guide
    @PutMapping("/update/{id}")
    public MealPlan update(
            @PathVariable("id") int id,
            @RequestParam(value = "photo",required = false) MultipartFile image,
            @RequestParam(value="planName", required = false) String planName,
            @RequestParam(value="preference", required = false) String preference,
            @RequestParam(value="ingredientName", required = false) String ingredientName,
            @RequestParam(value="instructions", required = false) String instructions,
            @RequestParam(value="info", required = false) String info,
            @RequestParam(value="portion", required = false) String portion
    ) throws IOException{
        MealPlan meal = new MealPlan();
        meal.setPortion(Integer.parseInt(portion));
        meal.setPlanName(planName);
        meal.setPreference(preference);
        ArrayList<String> ingredientsArr = new ArrayList<>(Arrays.asList(ingredientName.replace("[","").replace("]","").split(",")));
        meal.setIngredientName(ingredientsArr);
        ArrayList<String> instructionArr = new ArrayList<>(Arrays.asList(instructions.replace("[","").replace("]","").split(",")));
        meal.setInstructions(instructionArr);
        meal.setInfo(info);

        String filePath = this.mealPlanServiceService.uploadImage(path, image);
//        filePath = "../../".concat(filePath.substring(filePath.lastIndexOf("assets/")));
        filePath = filePath.replace("\\", "");

        meal.setImage(filePath);

        return this.mealPlanServiceService.update(id, meal);
    }

    //delete a travel guide from id
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") int id){
        this.mealPlanServiceService.delete(id);
        return "guide deleted";
    }
}

