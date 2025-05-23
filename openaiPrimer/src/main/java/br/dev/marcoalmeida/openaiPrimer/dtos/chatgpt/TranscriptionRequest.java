package br.dev.marcoalmeida.openaiPrimer.dtos.chatgpt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TranscriptionRequest implements Serializable {
    private MultipartFile file;
}