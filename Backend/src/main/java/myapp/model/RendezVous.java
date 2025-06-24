package myapp.model;

import java.time.LocalTime;
import java.util.Date;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "rendezvous")
public class RendezVous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Date date;

    @Column(name = "heure")
    private LocalTime heure;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;
    
    private String motif;
    private enum Status {
        EN_ATTENTE,
        CONFIRME,
        ANNULE,
        ACCOMPLIE
    }
    private Status status;
    private String commentaire;
    
}
