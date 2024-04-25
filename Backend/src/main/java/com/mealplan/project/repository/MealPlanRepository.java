package com.mealplan.project.repository;


import com.mealplan.project.entity.MealPlan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MealPlanRepository extends CrudRepository<MealPlan, Integer> {

    List<MealPlan> findByPlanId(int id);

}