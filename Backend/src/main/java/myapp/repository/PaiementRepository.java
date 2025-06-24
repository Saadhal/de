package myapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import myapp.model.Paiement;

public interface PaiementRepository extends JpaRepository<Paiement, Long> {
    List<Paiement> findByPatientId(Long patientId);
}
