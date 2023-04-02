package br.dev.marcoalmeida.openaiPrimer.aspects;

import br.dev.marcoalmeida.openaiPrimer.AbstractTests;
import br.dev.marcoalmeida.openaiPrimer.config.ObjectMapperConfiguration;
import br.dev.marcoalmeida.openaiPrimer.domain.ApiUsage;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTResponse;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Choice;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Message;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Usage;
import br.dev.marcoalmeida.openaiPrimer.repositories.ApiUsageRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.junit.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;


@ExtendWith(MockitoExtension.class)
@Slf4j
class ApiUsageAspectTest extends AbstractTests {


    @InjectMocks
    ApiUsageAspect apiUsageAspect;

    @Mock
    ApiUsageRepository apiUsageRepository;

    @Mock
    JoinPoint joinPoint;

    @Before
    public void setup() {
        openMocks(this);

    }

    @Test
    public void whenApiUsageAspectIsCalled_thenSaveApiUsage() {
        when(joinPoint.getArgs()).thenReturn(new Object[]{CHAT_GPT_REQUEST});

        apiUsageAspect.logChat(joinPoint, CHAT_GPT_RESPONSE);

        Mockito.verify(apiUsageRepository).save(any());
    }

}