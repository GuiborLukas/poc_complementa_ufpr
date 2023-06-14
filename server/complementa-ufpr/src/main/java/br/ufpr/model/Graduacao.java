package br.ufpr.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Graduacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @OneToOne(fetch = FetchType.LAZY)
    private Coordenador coordenador;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<ServidorCoordenador> servidoresCoordenadores;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Competencia> competencias;

    public Graduacao() {
    }

    public Graduacao(String nome, Coordenador coordenador, List<Competencia> competencias) {
        this.nome = nome;
        this.coordenador = coordenador;
        this.competencias = competencias;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Coordenador getCoordenador() {
        return coordenador;
    }

    public void setCoordenador(Coordenador coordenador) {
        this.coordenador = coordenador;
    }

    public List<ServidorCoordenador> getServidoresCoordenadores() {
        return servidoresCoordenadores;
    }

    public void setServidoresCoordenadores(List<ServidorCoordenador> servidoresCoordenadores) {
        this.servidoresCoordenadores = servidoresCoordenadores;
    }

    public List<Competencia> getCompetencias() {
        return competencias;
    }

    public void setCompetencias(List<Competencia> competencias) {
        this.competencias = competencias;
    }
}
