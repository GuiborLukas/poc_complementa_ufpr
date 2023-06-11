package br.ufpr.rest;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.ufpr.dto.UsuarioDTO;
import br.ufpr.model.Usuario;
import br.ufpr.repository.UsuarioRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "usuarios")
public class UsuarioREST {
	@Autowired
	private UsuarioRepository repository;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping
	public ResponseEntity<UsuarioDTO> insereUsuario(@RequestBody Usuario usuario) {
		// Se usuario ja existir, retorna HTTP 409 - Conflict
		if (repository.findByEmail(usuario.getEmail()) != null) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
		}

		try {
			// Encripta a senha do usuario antes de salvar
			String senhaEncriptada = bCryptPasswordEncoder.encode(usuario.getSenha());
			usuario.setSenha(senhaEncriptada);
			// Salva o usuario
			repository.save(usuario);

			Usuario usu = repository.findByEmail(usuario.getEmail());

			// Se deu tudo certo, retorna HTTP 201 - Created e o usuário criado
			return ResponseEntity.status(HttpStatus.CREATED).body(mapper.map(usu, UsuarioDTO.class));

		} catch (Exception e) {
			System.err.println("Erro inserir usuario:" + e.toString());
			// Se deu erro ao salvar, retorna HTTP 500 - Internal server error
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> removeUsuario(@PathVariable String id) {
		try {
			// Busca o usuario pelo id
			Optional<Usuario> usuOpt = repository.findById(id);
			if (usuOpt.isPresent()) {
				// Se ele existe, remove e retorna HTTP 204 - No Content
				repository.delete(usuOpt.get());
				return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
			} else {
				// Caso contrario, retorna HTTP 404 - Not Found
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			}
		} catch (Exception e) {
			System.err.println("Erro remover usuario:" + e.toString());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<UsuarioDTO> buscaUsuarioPorId(@PathVariable String id) {
		try {
			// Busca o usuario pelo id
			Optional<Usuario> usuOpt = repository.findById(id);
			if (usuOpt.isPresent()) {
				// Se ele existe, retorna HTTP 200 - OK e o usuario
				return ResponseEntity.status(HttpStatus.OK).body(mapper.map(usuOpt.get(), UsuarioDTO.class));
			} else {
				// Caso contrario, retorna HTTP 404 = Not Found
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			}

		} catch (Exception e) {
			System.err.println("Erro buscar usuario por ID:" + e.toString());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@GetMapping("/usuario")
	public ResponseEntity<UsuarioDTO> buscaUsuarioPorEmail(@RequestParam String email) {
		try {
			// Busca o usuario pelo email
			Usuario usu= repository.findByEmail(email);
			if (usu != null) {
				// Se ele existe, retorna HTTP 200 - OK e o usuario
				return ResponseEntity.status(HttpStatus.OK).body(mapper.map(usu, UsuarioDTO.class));
			} else {
				// Caso contrario, retorna HTTP 404 = Not Found
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			}

		} catch (Exception e) {
			System.err.println("Erro buscar usuario por Email:" + e.toString());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@GetMapping("/usuarios")
	public ResponseEntity<List<UsuarioDTO>> buscaTodosUsuarios() {
		try {
			// Busca todos os usuarios salvos
			List<Usuario> list = repository.findAll();
			if (list.isEmpty()) {
				// Se nao existir nenhum, retorna HTTP 404 Not Found
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			} else {
				// Caso contrario, retorna a HTTP 200 - OK e a lista de usuários
				List<UsuarioDTO> DTOlist = list.stream().map(usu -> mapper.map(usu, UsuarioDTO.class))
						.collect(Collectors.toList());

				return ResponseEntity.status(HttpStatus.OK).body(DTOlist);
			}
		} catch (Exception e) {
			System.err.println("Erro buscar todos usuarios: " + e.toString());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<UsuarioDTO> atualizarUsuario(@PathVariable String id, @RequestBody Usuario usuarioAtualizado) {
		try {
			// Busca o usuario pelo ID
			Optional<Usuario> usuOpt = repository.findById(id);
			if (!usuOpt.isPresent()) {
				// Se nao encontrou, retorna HTTP 404 - Not Found
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			} else {
				// Se encontrou, atualiza para os dados informados
				Usuario usuario = usuOpt.get();
				usuario.setNome(usuarioAtualizado.getNome());
				usuario.setEmail(usuarioAtualizado.getEmail());

				String senhaEncriptada = bCryptPasswordEncoder.encode(usuarioAtualizado.getSenha());
				usuario.setSenha(senhaEncriptada);

				usuario.setPapel(usuarioAtualizado.getPapel());
				usuario = repository.save(usuario);
				// Retorna HTTP 200 - OK e o usuario atualizado
				return ResponseEntity.status(HttpStatus.OK).body(mapper.map(usuario, UsuarioDTO.class));
			}

		} catch (Exception e) {
			System.err.println("Erro atualizar usuario: " + e.toString());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}

	}
}
