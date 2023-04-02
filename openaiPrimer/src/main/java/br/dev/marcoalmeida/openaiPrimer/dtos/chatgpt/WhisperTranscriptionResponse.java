package br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WhisperTranscriptionResponse implements Serializable {
    private String text;
}