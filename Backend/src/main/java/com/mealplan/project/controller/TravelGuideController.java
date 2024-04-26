//package com.mealplan.project.controller;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
//import com.mealplan.project.entity.TravelGuide;
//import com.mealplan.project.service.TravelGuideService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//
//@RestController
//@RequestMapping("/guide")
//@CrossOrigin(origins = "*")
//public class TravelGuideController {
//
//    @Autowired
//    private TravelGuideService travelGuideService;
//
//    @Value("${project.image}")
//    private String path;
//
//    @RequestMapping("/test")
//    public String test(){
//        return "THIS IS TEST MAPPING";
//    }
//
//    // //save travel guide controller
//    // @PostMapping("/save")
//    // public TravelGuide saveGuide(@RequestBody TravelGuide guide){
//    //     return this.travelGuideService.saveGuide(guide);
//    // }
//
//    //save travel guide controller
//    @PostMapping("/save")
//    public TravelGuide saveGuide(
//            @RequestParam(value = "guideImageMult",required = false) MultipartFile image,
//            @RequestParam(value="guideName", required = false) String guideName,
//            @RequestParam(value="guideLevel", required = false) String guideLevel,
//            @RequestParam(value="age", required = false) String age,
//            @RequestParam(value="languages", required = false) String languages,
//            @RequestParam(value="guideImage", required = false) String guideImage
//    ) throws IOException{
//        TravelGuide guide = new TravelGuide();
//        guide.setAge(Integer.parseInt(age));
//        guide.setGuideImage(guideImage);
//        guide.setGuideLevel(Integer.parseInt(guideLevel));
//        guide.setGuideName(guideName);
//        ArrayList<String> langArray = new ArrayList<>(Arrays.asList(languages.replace("[","").replace("]","").split(",")));
//        guide.setLanguages(langArray);
//
//        System.out.println("LANG ARRAY: " + langArray);
//
//        String filePath = this.travelGuideService.uploadImage(path, image);
////        filePath = "../../".concat(filePath.substring(filePath.lastIndexOf("assets/")));
//        filePath = filePath.replace("\\", "");
//
//        guide.setGuideImage(filePath);
//        return this.travelGuideService.saveGuide(guide);
//    }
//
//    //get all travel guides
//    @GetMapping("/getAll")
//    public List<TravelGuide> getAllTravelGuides(){
//        return this.travelGuideService.getAllTravelGuides();
//    }
//
//    //get a travel guide from guide id
//    @GetMapping("/getGuide/{guideId}")
//    public TravelGuide getGuideById(@PathVariable("guideId") int id){
//        return this.travelGuideService.getTravelGuideById(id);
//    }
//
//    // //update a travel guide
//    // @PutMapping("/updateGuide/{guideId}")
//    // public TravelGuide updateTravelGuide(@PathVariable("guideId") int id, @RequestBody TravelGuide guide){
//    //     return this.travelGuideService.updateTravelGuide(id, guide);
//    // }
//
//    //update a travel guide
//    @PutMapping("/updateGuide/{guideId}")
//    public TravelGuide updateTravelGuide(
//            @PathVariable("guideId") int id,
//            @RequestParam(value = "guideImageMult",required = false) MultipartFile image,
//            @RequestParam(value="guideName", required = false) String guideName,
//            @RequestParam(value="guideLevel", required = false) String guideLevel,
//            @RequestParam(value="age", required = false) String age,
//            @RequestParam(value="languages", required = false) String languages,
//            @RequestParam(value="guideImage", required = false) String guideImage
//    ) throws IOException{
//        TravelGuide guide = new TravelGuide();
//        guide.setAge(Integer.parseInt(age));
//        guide.setGuideImage(guideImage);
//        guide.setGuideLevel(Integer.parseInt(guideLevel));
//        guide.setGuideName(guideName);
//        ArrayList<String> langArray = new ArrayList<>(Arrays.asList(languages.replace("[","").replace("]","").split(",")));
//        guide.setLanguages(langArray);
//        String filePath = this.travelGuideService.uploadImage(path, image);
//        filePath = "../../".concat(filePath.substring(filePath.lastIndexOf("assets/")));
//
//        guide.setGuideImage(filePath);
//
//        return this.travelGuideService.updateTravelGuide(id, guide);
//    }
//
//    //delete a travel guide from id
//    @DeleteMapping("/deleteGuide/{guideId}")
//    public String deleteTravelGuide(@PathVariable("guideId") int id){
//        this.travelGuideService.deleteTravelGuide(id);
//        return "guide deleted";
//    }
//}
//
