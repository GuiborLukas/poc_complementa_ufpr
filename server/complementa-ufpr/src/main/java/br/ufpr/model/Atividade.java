package br.ufpr.model;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_atividades")
public class Atividade implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private Date dataCriacao;

    @Column(nullable = false)
    private Date dataLimiteCandidatura;

    @Column(nullable = false)
    private Date dataContestacao;

    @Column(nullable = false)
    private Date dataConclusao;

    @ManyToOne
    @JoinColumn(name = "competencia_id", nullable = false)
    private Competencia competencia;

    @ManyToOne
    @JoinColumn(name = "complexidade_id", nullable = false)
    private Complexidade complexidade;

    @OneToMany(mappedBy = "atividade", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comentario> comentarios = new ArrayList<>();

    public Atividade() {
    }

    public Atividade(String nome, Date dataCriacao, Date dataLimiteCandidatura, Date dataContestacao, Date dataConclusao,
                     Competencia competencia, Complexidade complexidade, List<Comentario> comentarios) {
        this.nome = nome;
        this.dataCriacao = dataCriacao;
        this.dataLimiteCandidatura = dataLimiteCandidatura;
        this.dataContestacao = dataContestacao;
        this.dataConclusao = dataConclusao;
        this.competencia = competencia;
        this.complexidade = complexidade;
        this.comentarios = comentarios;
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

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Date getDataLimiteCandidatura() {
        return dataLimiteCandidatura;
    }

    public void setDataLimiteCandidatura(Date dataLimiteCandidatura) {
        this.dataLimiteCandidatura = dataLimiteCandidatura;
    }

    public Date getDataContestacao() {
        return dataContestacao;
    }

    public void setDataContestacao(Date dataContestacao) {
        this.dataContestacao = dataContestacao;
    }

    public Date getDataConclusao() {
        return dataConclusao;
    }

    public void setDataConclusao(Date dataConclusao) {
        this.dataConclusao = dataConclusao;
    }

    public Competencia getCompetencia() {
        return competencia;
    }

    public void setCompetencia(Competencia competencia) {
        this.competencia = competencia;
    }

    public Complexidade getComplexidade() {
        return complexidade;
    }

    public void setComplexidade(Complexidade complexidade) {
        this.complexidade = complexidade;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }
}
