package myapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import myapp.model.Paiement;
import myapp.repository.PaiementRepository;

@Service
public class PaiementService {
    @Autowired
    private PaiementRepository paiementRepository;

    public List<Paiement> getAllPaiements() {
        return paiementRepository.findAll();
    }

    public Paiement createPaiement (Paiement paiement) {
        return paiementRepository.save(paiement);
    }

    public Paiement updatePaiement(Long id, Paiement paiement) {
        return paiementRepository.save(paiement);
    }

    public void deletePaiement(Long id) {
        paiementRepository.deleteById(id);
    }

    public Optional<Paiement> getPaiementById(Long id) {
        return paiementRepository.findById(id);
    }

    public List<Paiement> getPaiementsByPatientId(Long patientId) {
        return paiementRepository.findByPatientId(patientId);
    }
}
