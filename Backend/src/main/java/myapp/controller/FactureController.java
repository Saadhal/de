package myapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import myapp.model.Facture;
import myapp.service.FactureService;

@RestController
@RequestMapping("/api/factures")
public class FactureController {
    @Autowired
    private FactureService factureService;

    @GetMapping
    public List<Facture> getAllFactures() {
        return factureService.getAllFactures();
    }

    @GetMapping("/{id}")
    public Optional<Facture> getFactureById(@PathVariable Long id) {
        return factureService.getFactureById(id);
    }

    @PostMapping
    public Facture createFacture(@RequestBody Facture facture) {
        return factureService.createFacture(facture);
    }

    @PutMapping("/{id}")
    public Facture updateFacture(@PathVariable Long id, @RequestBody Facture facture) {
        return factureService.updateFacture(id, facture);
    }

    @DeleteMapping("/{id}")
    public void deleteFacture(@PathVariable Long id) {
        factureService.deleteFacture(id);
    }

}