package br.ufpr.rest;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufpr.dto.AtividadeDTO;
import br.ufpr.model.Atividade;
import br.ufpr.repository.AtividadeRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "atividades")
public class AtividadeREST {

	@Autowired
	private AtividadeRepository repo;

	@Autowired
	private ModelMapper mapper;

	@GetMapping
	public ResponseEntity<List<AtividadeDTO>> obterTodasAtividades() {

		List<Atividade> lista = repo.findAll();

		if (lista.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK)
				.body(lista.stream().map(e -> mapper.map(e, AtividadeDTO.class)).collect(Collectors.toList()));

	}

	@GetMapping("/{id}")
	public ResponseEntity<AtividadeDTO> buscaPorId(@PathVariable Long id) {

		Optional<Atividade> atividade = repo.findById(id);
		if (atividade.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(mapper.map(atividade, AtividadeDTO.class));
		}
	}

	@PostMapping
	public ResponseEntity<AtividadeDTO> inserirAtividade(@RequestBody AtividadeDTO atividade) {

		try {
			Atividade atv = repo.save(mapper.map(atividade, Atividade.class));
			Optional<Atividade> atvOpt = repo.findById(atv.getId());
			if (!atvOpt.isPresent()) {
				throw new Exception("Criação da atividade não foi realizada com sucesso");
			}
			System.err.println(4);
			return ResponseEntity.status(HttpStatus.CREATED).body(mapper.map(atvOpt.get(), AtividadeDTO.class));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<AtividadeDTO> alterarAtividade(@PathVariable("id") long id, @RequestBody Atividade atividade) {
		Optional<Atividade> atv = repo.findById(id);

		if (atv.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} else {
			atividade.setId(id);
			repo.save(mapper.map(atividade, Atividade.class));
			atv = repo.findById(id);
			return ResponseEntity.status(HttpStatus.OK).body(mapper.map(atv, AtividadeDTO.class));
		}

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> removerAtividade(@PathVariable("id") long id) {

		Optional<Atividade> atividade = repo.findById(id);
		if (atividade.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} else {
			repo.delete(mapper.map(atividade, Atividade.class));
			return ResponseEntity.status(HttpStatus.OK).body(null);
		}
	}
}
