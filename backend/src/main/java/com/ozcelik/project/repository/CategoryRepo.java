package com.ozcelik.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ozcelik.project.model.ProductCategory;

@CrossOrigin("http://localhost:4200")

public interface CategoryRepo extends JpaRepository<ProductCategory, Long> {

}
