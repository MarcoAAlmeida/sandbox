package br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message implements Serializable {
    private String role;
    private String content;
}