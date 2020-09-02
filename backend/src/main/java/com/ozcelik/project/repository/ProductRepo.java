package com.ozcelik.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ozcelik.project.model.Product;

@CrossOrigin(origins = "http://localhost:4200")
public interface ProductRepo extends JpaRepository<Product, Long> {
	List<Product> findByNameContaining(String name);
}
	