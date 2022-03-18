package com.example.Practica5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class Practica5Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica5Application.class, args);
	}

	@RequestMapping("/")
	public String servicios()
	{
		return "servicios.html";
	}

}
