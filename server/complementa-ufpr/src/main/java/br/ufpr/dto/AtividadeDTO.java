package br.ufpr.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class AtividadeDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;
    private Date dataCriacao;
    private Date dataLimiteCandidatura;
    private Date dataContestacao;
    private Date dataConclusao;
    private CompetenciaDTO competencia;
    private ComplexidadeDTO complexidade;
    private List<ComentarioDTO> comentarios;

    public AtividadeDTO() {
    }

    public AtividadeDTO(Long id, String nome, Date dataCriacao, Date dataLimiteCandidatura, Date dataContestacao,
                        Date dataConclusao, CompetenciaDTO competencia, ComplexidadeDTO complexidade,
                        List<ComentarioDTO> comentarios) {
        this.id = id;
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

    public CompetenciaDTO getCompetencia() {
        return competencia;
    }

    public void setCompetencia(CompetenciaDTO competencia) {
        this.competencia = competencia;
    }

    public ComplexidadeDTO getComplexidade() {
        return complexidade;
    }

    public void setComplexidade(ComplexidadeDTO complexidade) {
        this.complexidade = complexidade;
    }

    public List<ComentarioDTO> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<ComentarioDTO> comentarios) {
        this.comentarios = comentarios;
    }
    
    @Override
    public String toString() {
        return "AtividadeDTO [id=" + getId() +
                ", nome='" + getNome() + '\'' +
                ", dataCriacao=" + getDataCriacao() +
                ", dataLimiteCandidatura=" + getDataLimiteCandidatura() +
                ", dataContestacao=" + getDataContestacao() +
                ", dataConclusao=" + getDataConclusao() +
                ", competencia=" + getCompetencia() +
                ", complexidade=" + getComplexidade() +
                ", comentarios=" + getComentarios() +
                "]";
    }

}