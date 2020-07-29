package com.indiggo.dao;

import com.indiggo.domain.Planet;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class PlanetDao {
    //This should be wired up to a real database but for the sake of this project I'm not going to set up
    //an entire Hibernate connection for one entity and instead just hardcode some basic planets into this dao call

    public Planet getRandomPlanet(){
        Random rng = new Random();
        List<Planet> planets = createPlanets();
        return planets.get(rng.nextInt(5));
    }

    private List<Planet> createPlanets(){
        //This is a horribly inefficient way of doing this, but its only 5 objects. Best practice would be to put this
        //in a database and not recreate these planets every single time this is called.
        List<Planet> planets = new ArrayList<Planet>();
        planets.add(new Planet("Earth","blue",new BigDecimal(60)));
        planets.add(new Planet("Neptune","purple",new BigDecimal(80)));
        planets.add(new Planet("Jupiter","orange",new BigDecimal(100)));
        planets.add(new Planet("Pluto","darkgray",new BigDecimal(20)));
        planets.add(new Planet("Naboo","aqua",new BigDecimal(40)));
        return planets;
    }
}
