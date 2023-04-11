package br.dev.marcoalmeida.openaiPrimer.services;

import br.dev.marcoalmeida.openaiPrimer.config.ObjectMapperConfiguration;
import br.dev.marcoalmeida.openaiPrimer.domain.ApiUsage;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTResponse;
import br.dev.marcoalmeida.openaiPrimer.dtos.Exchange;
import br.dev.marcoalmeida.openaiPrimer.repositories.ApiUsageRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApiUsageService {

    private final ObjectMapperConfiguration objectMapperConfiguration;

    private final ApiUsageRepository apiUsageRepository;


    public Optional<Exchange> getExchange(String id){
        return apiUsageRepository.findById(id).flatMap(this::getExchange);

    }

    private Optional<Exchange> getExchange(ApiUsage apiUsage) {
        try {
            return Optional.of(Exchange.of(
                    DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(apiUsage.getCollectedAt()),
                    objectMapperConfiguration.objectMapper().readValue(apiUsage.getRequest(), ChatGPTRequest.class),
                    objectMapperConfiguration.objectMapper().readValue(apiUsage.getResponse(), ChatGPTResponse.class))
            );

        } catch (JsonProcessingException e) {
            log.error("while parsing exchange", e);
        }
        return Optional.empty();
    }

}