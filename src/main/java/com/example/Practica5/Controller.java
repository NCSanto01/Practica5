package com.example.Practica5;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    Cliente cliente;

    @GetMapping("/getClientes")
    public Cliente getClientes(){
        return cliente;
    }

    @PostMapping("/setClientes")
    public Cliente postCliente(@RequestBody Cliente cliente){
        this.cliente=cliente;
        return cliente;
    }
    
}
