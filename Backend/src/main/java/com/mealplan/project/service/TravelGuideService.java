//package com.mealplan.project.service;
//
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.List;
//import java.util.UUID;
//
//import ch.qos.logback.core.net.SyslogOutputStream;
//import com.mealplan.project.entity.TravelGuide;
//import com.mealplan.project.repository.TravelGuideRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//
//
//@Component
//public class TravelGuideService {
//
//    @Autowired
//    private TravelGuideRepository travelGuideRepository;
//
//
//    //save a travel guide
//    public TravelGuide saveGuide(TravelGuide guide){
//        return this.travelGuideRepository.save(guide);
//    }
//
//    //get All travel guides
//    public List<TravelGuide> getAllTravelGuides(){
//        List<TravelGuide> guides = (List<TravelGuide>) this.travelGuideRepository.findAll();
//        return guides;
//    }
//
//    //get a travel guide from id
//    public TravelGuide getTravelGuideById(int id){
//        return this.travelGuideRepository.findByGuideId(id).get(0);
//    }
//
//    //update a travel guide from id
//    public TravelGuide updateTravelGuide(int guideId, TravelGuide guide){
//        TravelGuide g = this.travelGuideRepository.findByGuideId(guideId).get(0);
//        g.setAge(guide.getAge());
//        g.setGuideLevel(guide.getGuideLevel());
//        g.setGuideName(guide.getGuideName());
//        g.setLanguages(guide.getLanguages());
//        g.setGuideImage(guide.getGuideImage());
//
//        return this.travelGuideRepository.save(g);
//    }
//
//    //delete a travel guide from id
//    public void deleteTravelGuide(int guideId){
//        this.travelGuideRepository.deleteById(guideId);
//    }
//
//    //upload images
//    public String uploadImage(String path, MultipartFile file) throws IOException{
//        String name = file.getOriginalFilename();
//        String randomID = UUID.randomUUID().toString();
//        String newFileName = randomID.concat(name.substring(name.lastIndexOf(".")));
//
//        String filePath = path + File.separator + newFileName;
//        File f = new File(path);
//        if(!f.exists()){
//            f.mkdir();
//        }
//        Files.copy(file.getInputStream(), Paths.get(filePath));
//
//        return filePath;
//    }
//}
