package br.dev.marcoalmeida.openaiPrimer.services;

import br.dev.marcoalmeida.openaiPrimer.clients.OpenAIClient;
import br.dev.marcoalmeida.openaiPrimer.config.OpenAIClientConfig;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTResponse;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.Message;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.TranscriptionRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.WhisperTranscriptionRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.WhisperTranscriptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
@SuppressWarnings("ClassCanBeRecord")
public class OpenAIClientService {

    private final OpenAIClient openAIClient;
    private final OpenAIClientConfig openAIClientConfig;

    private final static String ROLE_USER = "user";

    public ChatGPTResponse chat(ChatRequest chatRequest){
        Message message = Message.builder()
                .role(ROLE_USER)
                .content(chatRequest.getQuestion())
                .build();
        ChatGPTRequest chatGPTRequest = ChatGPTRequest.builder()
                .model(openAIClientConfig.getModel())
                .messages(Collections.singletonList(message))
                .build();
        return openAIClient.chat(chatGPTRequest);
    }

    public WhisperTranscriptionResponse createTranscription(TranscriptionRequest transcriptionRequest){
        WhisperTranscriptionRequest whisperTranscriptionRequest = WhisperTranscriptionRequest.builder()
                .model(openAIClientConfig.getAudioModel())
                .file(transcriptionRequest.getFile())
                .build();
        return openAIClient.createTranscription(whisperTranscriptionRequest);
    }
}