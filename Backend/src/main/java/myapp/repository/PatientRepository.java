package myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import myapp.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
