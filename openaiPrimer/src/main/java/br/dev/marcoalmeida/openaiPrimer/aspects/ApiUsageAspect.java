package br.dev.marcoalmeida.openaiPrimer.aspects;

import br.dev.marcoalmeida.openaiPrimer.config.ObjectMapperConfiguration;
import br.dev.marcoalmeida.openaiPrimer.domain.ApiUsage;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTResponse;
import br.dev.marcoalmeida.openaiPrimer.repositories.ApiUsageRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Aspect
@RequiredArgsConstructor
@Component
@Slf4j
@SuppressWarnings("ClassCanBeRecord")
public class ApiUsageAspect {

    public static final int CHAT_PARAM_LENGTH = 1;
    public static final int REQUEST_INDEX = 0;

    private final ApiUsageRepository apiUsageRepository;

    @AfterReturning(pointcut = "execution(* br.dev.marcoalmeida.openaiPrimer.clients.OpenAIClient.chat(..))", returning = "response")
    public void logChat(JoinPoint joinPoint, ChatGPTResponse response) {
        assert (joinPoint.getArgs().length == CHAT_PARAM_LENGTH);
        assert (joinPoint.getArgs()[REQUEST_INDEX] instanceof ChatGPTRequest);

        ChatGPTRequest request = (ChatGPTRequest) joinPoint.getArgs()[0];

        try {
            apiUsageRepository.save(ApiUsage.builder()
                    .id(response.getId())
                    .collectedAt(LocalDateTime.now())
                    .api("openai")
                    .totalTokens(Integer.parseInt(response.getUsage().getTotalTokens()))
                    .request(ObjectMapperConfiguration.instance().writeValueAsString(request))
                    .response(ObjectMapperConfiguration.instance().writeValueAsString(response))
                    .build());

        } catch (JsonProcessingException e) {
            log.error("while saving api usage", e);
        }
    }
}

