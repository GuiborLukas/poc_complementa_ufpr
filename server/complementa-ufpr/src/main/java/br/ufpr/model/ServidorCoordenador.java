package br.ufpr.model;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "tb_coordenadores")
@Inheritance(strategy = InheritanceType.JOINED)
public class ServidorCoordenador extends Servidor {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ServidorCoordenador() {
        super();
    }

    public ServidorCoordenador(Long id, String nome, String email, String telefone, String senha, String papel, String matricula) {
        super(id, nome, email, telefone, senha, papel, matricula);
    }
}
