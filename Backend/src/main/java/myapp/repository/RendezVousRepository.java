package myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import myapp.model.RendezVous;

public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {

}
