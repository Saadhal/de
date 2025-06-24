package myapp.model;

import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "paiements")
public class Paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date datePaiement;
    
    @Column(nullable = false)
    private double montant;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private MoyenPaiement moyenPaiement;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    @Column(nullable = false)
    private Patient patient;
}
