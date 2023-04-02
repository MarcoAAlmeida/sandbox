package br.dev.marcoalmeida.openaiPrimer.services;

import br.dev.marcoalmeida.openaiPrimer.AbstractTests;
import br.dev.marcoalmeida.openaiPrimer.clients.OpenAIClient;
import br.dev.marcoalmeida.openaiPrimer.config.OpenAIClientConfig;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatNoException;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class OpenAIClientServiceTests extends AbstractTests {

    @InjectMocks
    OpenAIClientService openAIClientService;

    @Mock
    OpenAIClient openAIClient;

    @Mock
    OpenAIClientConfig openAIClientConfig;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void WhenChatIsCalled_ExpectNoExceptions() {
        openAIClientService.chat(CHAT_REQUEST);
    }

}
