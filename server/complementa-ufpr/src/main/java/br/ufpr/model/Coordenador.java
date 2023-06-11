package br.ufpr.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_coordenadores")
public class Coordenador extends Orientador {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Coordenador() {
        super();
    }

    public Coordenador(Long id, String nome, String email, String telefone, String senha, String papel, String matricula, Graduacao graduacao) {
        super(id, nome, email, telefone, senha, papel, matricula, graduacao);
    }
}
