package br.ufpr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_alunos")
public class Aluno extends Usuario {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "grr_aluno")
    private String grr;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_graduacao")
    private Graduacao graduacao;

    public Aluno() {
        super();
    }

    public Aluno(Long id, String nome, String email, String telefone, String senha, String papel, String grr, Graduacao graduacao) {
        super(id, nome, email, telefone, senha, papel);
        this.grr = grr;
        this.graduacao = graduacao;
    }

    public String getGrr() {
        return grr;
    }

    public void setGrr(String grr) {
        this.grr = grr;
    }

    public Graduacao getGraduacao() {
        return graduacao;
    }

    public void setGraduacao(Graduacao graduacao) {
        this.graduacao = graduacao;
    }
}
