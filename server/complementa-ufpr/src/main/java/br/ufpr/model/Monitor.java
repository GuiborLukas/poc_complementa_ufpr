package br.ufpr.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_monitores")
public class Monitor extends Aluno {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Monitor() {
        super();
    }

    public Monitor(Long id, String nome, String email, String telefone, String senha, String papel, String grr, Graduacao graduacao) {
        super(id, nome, email, telefone, senha, papel, grr, graduacao);
    }
}
