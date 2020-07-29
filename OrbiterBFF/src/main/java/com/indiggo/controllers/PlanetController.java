package com.indiggo.controllers;

import com.indiggo.dao.PlanetDao;
import com.indiggo.domain.Planet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlanetController {

    @Autowired
    PlanetDao planetDao;

    @RequestMapping("/planet")
    public Planet getRandomPlanet(){
        return planetDao.getRandomPlanet();
    }
}
