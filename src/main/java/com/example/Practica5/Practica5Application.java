package com.example.Practica5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class Practica5Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica5Application.class, args);
	}

	@RequestMapping("/")
	public String index()
	{
		return "servicios.html";
	}

}
