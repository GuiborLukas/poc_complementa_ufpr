package br.ufpr.dto;

import br.ufpr.dto.GraduacaoDTO;

public class AlunoDTO extends UsuarioDTO {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String grr;
	private GraduacaoDTO graduacao;

	public AlunoDTO() {
		super();
	}

	public AlunoDTO(Long id, String nome, String email, String telefone, String papel, String grr,
			GraduacaoDTO graduacao, boolean success, String message) {
		super(id, nome, email, telefone, papel, success, message);
		this.grr = grr;
		this.graduacao = graduacao;
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
		return "AlunoDTO [id=" + getId() + ", nome=" + getNome() + ", email=" + getEmail() + ", telefone="
				+ getTelefone() + ", papel=" + getPapel() + ", grr=" + grr + ", graduacao=" + graduacao + ", success="
				+ isSuccess() + ", message=" + getMessage() + "]";
	}
}
