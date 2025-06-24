package myapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import myapp.model.RendezVous;
import myapp.service.RendezVousService;

@RestController
@RequestMapping("/api/rendezvous")
public class RendezVousController {
    @Autowired
    private RendezVousService rendezVousService;

    @PostMapping
    public RendezVous createRendezVous(@RequestBody RendezVous rendezvous) {
        return rendezVousService.createRendezVous(rendezvous);
    }

    @GetMapping("/{id}")
    public Optional<RendezVous> getRendezVousById(@PathVariable Long id) {
        return rendezVousService.getRendezVousById(id);
    }

    @GetMapping
    public List<RendezVous> getAllRendezVous() {
        return rendezVousService.getAllRendezVous();
    }

    @PutMapping("/{id}")
    public RendezVous updateRendezVous(@PathVariable Long id, @RequestBody RendezVous rendezvous) {
        return rendezVousService.updateRendezVous(id, rendezvous);
    }

    @DeleteMapping("/{id}")
    public void deleteRendezVous(@PathVariable Long id) {
        rendezVousService.deleteRendezVous(id);
    }
}
