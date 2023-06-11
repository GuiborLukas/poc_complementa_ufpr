package br.ufpr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_complexidades")
public class Complexidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_complexidade")
    private Long id;

    @Column(name = "nome_complexidade")
    private String nome;

    @Column(name = "carga_horaria_minima")
    private int cargaHorariaMinima;

    @Column(name = "carga_horaria_maxima")
    private int cargaHorariaMaxima;

    public Complexidade() {
    }

    public Complexidade(Long id, String nome, int cargaHorariaMinima, int cargaHorariaMaxima) {
        this.id = id;
        this.nome = nome;
        this.cargaHorariaMinima = cargaHorariaMinima;
        this.cargaHorariaMaxima = cargaHorariaMaxima;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getCargaHorariaMinima() {
        return cargaHorariaMinima;
    }

    public void setCargaHorariaMinima(int cargaHorariaMinima) {
        this.cargaHorariaMinima = cargaHorariaMinima;
    }

    public int getCargaHorariaMaxima() {
        return cargaHorariaMaxima;
    }

    public void setCargaHorariaMaxima(int cargaHorariaMaxima) {
        this.cargaHorariaMaxima = cargaHorariaMaxima;
    }
}
