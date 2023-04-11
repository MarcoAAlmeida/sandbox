package br.dev.marcoalmeida.openaiPrimer.repositories;

import br.dev.marcoalmeida.openaiPrimer.domain.ApiUsage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApiUsageRepository extends CrudRepository<ApiUsage, String> {
    Optional<ApiUsage> findById(String id);
}
