package br.ufpr.rest;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.ufpr.dto.LoginDTO;
import br.ufpr.dto.UsuarioDTO;
import br.ufpr.model.Usuario;
import br.ufpr.repository.UsuarioRepository;

@RestController
public class AuthREST {

	@Autowired
	private UsuarioRepository repository;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/login")
	public ResponseEntity<UsuarioDTO> login(@RequestBody LoginDTO login) {

		try {

			Optional<Usuario> usuOpt = repository.findByEmail(login.getEmail());

			// Se nao encontrou o usuario, retorna HTTP 401 - Unauthorized
			if (usuOpt.isEmpty()) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
			}			
			Usuario usu = usuOpt.get();
			// Se encontrou, valida o md5 da senha
			Boolean senhaValida;
			System.out.println("Realizando validação do usuário " + usu.toString());
				senhaValida = bCryptPasswordEncoder.matches(login.getSenha(), usu.getSenha());
			
			// Se a validacao da senha deu erro, retorna HTTP 401 - Unauthorized
			if (!senhaValida) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
			}
			return ResponseEntity.ok(mapper.map(usu, UsuarioDTO.class));
		} catch (Exception e) {
			System.err.println("Erro inserir usuario:" + e.toString());
			e.printStackTrace();
			// Se deu erro ao salvar, retorna HTTP 500 - Internal server error
			return ResponseEntity.internalServerError().body(null);
		}
	}
}
