package br.ufpr.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufpr.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
	
	Optional<Aluno> findById(String id);
	
    Aluno findByEmail(String email);
    
    public long count();
    
}
