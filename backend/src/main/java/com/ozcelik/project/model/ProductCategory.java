package com.ozcelik.project.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "product_category")
@Getter
@Setter
public class ProductCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "category_name")
	private String categoryName;
	
	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL,mappedBy = "category")
	private Set<Product> products;
}
