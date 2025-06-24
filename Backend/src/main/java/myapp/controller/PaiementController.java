package myapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import myapp.model.Paiement;
import myapp.service.PaiementService;

@RestController
@RequestMapping("/api/paiements")
public class PaiementController {
    @Autowired
    private PaiementService paiementService;

    @GetMapping
    public List<Paiement> getAllPaiements() {
        return paiementService.getAllPaiements();
    }

    @GetMapping("/{id}")
    public Optional<Paiement> getPaiementById(@PathVariable Long id) {
        return paiementService.getPaiementById(id);
    }

    @PostMapping
    public Paiement createPaiement(@RequestBody Paiement paiement) {
        return paiementService.createPaiement(paiement);
    }

    @PutMapping("/{id}")
    public Paiement updatePaiement(@PathVariable Long id, @RequestBody Paiement paiement) {
        return paiementService.updatePaiement(id, paiement);
    }

    @DeleteMapping("/{id}")
    public void deletePaiement(@PathVariable Long id) {
        paiementService.deletePaiement(id);
    }

    @GetMapping("/patient/{patientId}")
    public List<Paiement> getPaiementsByPatientId(@PathVariable Long patientId) {
        return paiementService.getPaiementsByPatientId(patientId);
    }
}