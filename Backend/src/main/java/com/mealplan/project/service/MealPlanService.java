package com.mealplan.project.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import com.mealplan.project.entity.MealPlan;
import com.mealplan.project.repository.MealPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;


@Component
public class MealPlanService {

    @Autowired
    private MealPlanRepository mealPlanRepository;


    //save a travel guide
    public MealPlan save(MealPlan meal){
        return this.mealPlanRepository.save(meal);
    }

    //get All travel guides
    public List<MealPlan> getAll(){
        List<MealPlan> plans = (List<MealPlan>) this.mealPlanRepository.findAll();
        return plans;
    }

    //get a travel guide from id
    public MealPlan getById(int id){
        return this.mealPlanRepository.findByPlanId(id).get(0);
    }

    //update a travel guide from id
    public MealPlan update(int id, MealPlan plan){
        MealPlan g = this.mealPlanRepository.findByPlanId(id).get(0);
        g.setPlanName(plan.getPlanName());
        g.setPreference(plan.getPreference());
        g.setIngredientName(plan.getIngredientName());
        g.setInstructions(plan.getInstructions());
        g.setPortion(plan.getPortion());
        g.setInfo(plan.getInfo());
        g.setImage(plan.getImage());

        return this.mealPlanRepository.save(g);
    }

    //delete a travel guide from id
    public void delete(int id){
        this.mealPlanRepository.deleteById(id);
    }

    //upload images
    public String uploadImage(String path, MultipartFile file) throws IOException{
        String name = file.getOriginalFilename();
        String randomID = UUID.randomUUID().toString();
        String newFileName = randomID.concat(name.substring(name.lastIndexOf(".")));

        String filePath = path + File.separator + newFileName;
        File f = new File(path);
        if(!f.exists()){
            f.mkdir();
        }
        Files.copy(file.getInputStream(), Paths.get(filePath));

        return filePath;
    }
}
