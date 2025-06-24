package myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import myapp.model.Facture;

public interface FactureRepository extends JpaRepository<Facture, Long> {

}
