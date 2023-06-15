package br.ufpr.rest;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufpr.dto.AlunoDTO;
import br.ufpr.model.Aluno;
import br.ufpr.repository.AlunoRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "autocadastro")
public class AutocadastroREST {

	@Autowired
	private AlunoRepository repo;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;


	@PostMapping
	public ResponseEntity<AlunoDTO> autocadastrarAluno(@RequestBody Aluno aluno) {

		try {
			aluno.setSenha(bCryptPasswordEncoder.encode(aluno.getSenha()));
			Aluno aln = repo.save(mapper.map(aluno, Aluno.class));
			Optional<Aluno> alnOpt = repo.findById(aln.getId());
			if (!alnOpt.isPresent()) {	
				throw new Exception("Criação do aluno não foi realizada com sucesso");
			}
			return ResponseEntity.status(HttpStatus.CREATED).body(mapper.map(alnOpt.get(), AlunoDTO.class));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
