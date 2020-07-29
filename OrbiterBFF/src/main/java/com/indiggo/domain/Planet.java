package com.indiggo.domain;

import java.math.BigDecimal;

public class Planet {
    private String name;
    private String color;
    private BigDecimal radius;

    public Planet(String name, String color, BigDecimal radius) {
        this.name = name;
        this.color = color;
        this.radius = radius;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public BigDecimal getRadius() {
        return radius;
    }

    public void setRadius(BigDecimal radius) {
        this.radius = radius;
    }
}
