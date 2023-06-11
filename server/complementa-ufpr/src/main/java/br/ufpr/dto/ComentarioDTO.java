package br.ufpr.dto;

import java.io.Serializable;

public class ComentarioDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private UsuarioDTO usuario;
    private String mensagem;

    public ComentarioDTO() {
    }

    public ComentarioDTO(Long id, UsuarioDTO usuario, String mensagem) {
        this.id = id;
        this.usuario = usuario;
        this.mensagem = mensagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UsuarioDTO getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioDTO usuario) {
        this.usuario = usuario;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
