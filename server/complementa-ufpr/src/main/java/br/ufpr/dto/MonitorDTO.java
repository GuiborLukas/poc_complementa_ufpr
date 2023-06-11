package br.ufpr.dto;

import java.io.Serializable;

public class MonitorDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String papel;
    private String grr;
    private GraduacaoDTO graduacao;

    public MonitorDTO() {
    }

    public MonitorDTO(Long id, String nome, String email, String telefone, String papel, String grr,
            GraduacaoDTO graduacao) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.papel = papel;
        this.grr = grr;
        this.graduacao = graduacao;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getPapel() {
        return papel;
    }

    public void setPapel(String papel) {
        this.papel = papel;
    }

    public String getGrr() {
        return grr;
    }

    public void setGrr(String grr) {
        this.grr = grr;
    }

    public GraduacaoDTO getGraduacao() {
        return graduacao;
    }

    public void setGraduacao(GraduacaoDTO graduacao) {
        this.graduacao = graduacao;
    }

    @Override
    public String toString() {
        return "MonitorDTO [id=" + id + ", nome=" + nome + ", email=" + email + ", telefone=" + telefone + ", papel="
                + papel + ", grr=" + grr + ", graduacao=" + graduacao + "]";
    }
}
