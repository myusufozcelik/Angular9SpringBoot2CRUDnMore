package com.ozcelik.project.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ozcelik.project.model.Product;
import com.ozcelik.project.repository.ProductRepo;

@RestController
@RequestMapping("/api")
public class ProductController {
	
	private ProductRepo repo;

	
	 public ProductController(ProductRepo repo) {
		// TODO Auto-generated constructor stub
		 this.repo = repo;
	}

	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) String name) {
		try {
			List<Product> _products = new ArrayList<Product>();

			if (name == null) {
			
				repo.findAll().forEach(_products::add);
			} 
			else {
				repo.findByNameContaining(name).forEach(_products::add);
			}
			if (_products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(_products, HttpStatus.OK);
		}

		catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable("id") long id) {
		Optional<Product> productData = repo.findById(id);

		if (productData.isPresent()) {
			return new ResponseEntity<>(productData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	

	@PostMapping("/products")
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {

		if (product != null) {
			return new ResponseEntity<>(repo.save(product), HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
			Optional<Product> productData = repo.findById(id);
			
			if(productData.isPresent()) {
				
				return new ResponseEntity<>(repo.save(product),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
			}
			
	}
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") long id) {
		try {
			repo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@DeleteMapping("/products")
	public ResponseEntity<HttpStatus> deleteAllProducts() {
		try {
			repo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
}
