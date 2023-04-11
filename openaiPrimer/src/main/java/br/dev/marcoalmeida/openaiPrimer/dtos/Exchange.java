package br.dev.marcoalmeida.openaiPrimer.dtos;

import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatGPTResponse;

public record Exchange (String createdAt, ChatGPTRequest request, ChatGPTResponse response) {
    public static Exchange of(String createdAt, ChatGPTRequest request, ChatGPTResponse response) {
        return new Exchange(createdAt, request, response);
    }
}
