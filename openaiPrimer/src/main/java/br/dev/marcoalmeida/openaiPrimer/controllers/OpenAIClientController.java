package br.dev.marcoalmeida.openaiPrimer.controllers;

import br.dev.marcoalmeida.openaiPrimer.dtos.ExchangeID;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.ChatRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.Exchange;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.TranscriptionRequest;
import br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt.WhisperTranscriptionResponse;
import br.dev.marcoalmeida.openaiPrimer.services.ApiUsageService;
import br.dev.marcoalmeida.openaiPrimer.services.OpenAIClientService;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*", exposedHeaders = "Authorization")
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1")
public class OpenAIClientController {

    private final OpenAIClientService openAIClientService;
    private final ApiUsageService apiUsageService;

    @PostMapping(value = "/chat", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ExchangeID> chat(@RequestBody ChatRequest chatRequest){
        return ResponseEntity.ok(ExchangeID.of(openAIClientService.chat(chatRequest).getId()));
    }

    @GetMapping(value = "/chat/{id}")
    public ResponseEntity<Exchange> getChat(@PathVariable String id){
        return apiUsageService.getExchange(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value = "/transcription", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public WhisperTranscriptionResponse createTranscription(@ModelAttribute TranscriptionRequest transcriptionRequest){
        return openAIClientService.createTranscription(transcriptionRequest);
    }

}