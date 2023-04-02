package br.dev.marcoalmeida.openaiPrimer;

import br.dev.marcoalmeida.openaiPrimer.config.ObjectMapperConfiguration;
import br.dev.marcoalmeida.openaiPrimer.domain.ApiUsage;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTResponse;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Choice;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Message;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Usage;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
public abstract class AbstractTests {
    public static final String ID = "asdfsadf-asdfsadf-asdfsdf-asfdsf";
    public static final String MODEL = "gpt-3.5-turbo";
    public static final String TOTAL_TOKENS = "100";
    public static final String QUESTION = "Hello World, how are you?";

    public static Message PROMPT = Message.builder()
            .content(QUESTION)
            .role("user")
            .build();

    public static Message REPLY = Message.builder()
            .content("I'm well. How may I assist?")
            .role("assistant")
            .build();

    public static Choice CHOICE = Choice.builder()
            .message(REPLY)
            .index(0)
            .finishReason("stop")
            .build();

    public static Usage USAGE = Usage.builder()
            .totalTokens(TOTAL_TOKENS)
            .build();

    public static ChatRequest CHAT_REQUEST = ChatRequest.builder()
            .question(QUESTION)
            .build();

    public static ChatGPTRequest CHAT_GPT_REQUEST = ChatGPTRequest.builder()
            .messages(List.of(PROMPT))
            .model(MODEL)
            .build();

    public static ChatGPTResponse CHAT_GPT_RESPONSE = ChatGPTResponse.builder()
            .id(ID)
            .model(MODEL)
            .usage(USAGE)
            .choices(List.of(CHOICE))
            .build();

    public static ApiUsage API_USAGE;

    static {
        try {
            API_USAGE = ApiUsage.builder()
                    .id(ID)
                    .collectedAt(LocalDateTime.now())
                    .api("openai")
                    .totalTokens(Integer.parseInt(CHAT_GPT_RESPONSE.getUsage().getTotalTokens()))
                    .request(ObjectMapperConfiguration.instance().writeValueAsString(CHAT_GPT_REQUEST))
                    .response(ObjectMapperConfiguration.instance().writeValueAsString(CHAT_GPT_RESPONSE))
                    .build();

        } catch (JsonProcessingException e) {
            log.error("Error while creating ApiUsage mock object", e);
        }
    }

}

