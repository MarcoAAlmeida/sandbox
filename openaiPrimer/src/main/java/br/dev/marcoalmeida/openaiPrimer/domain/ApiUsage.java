package br.dev.marcoalmeida.openaiPrimer.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
@Builder
public class ApiUsage {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    private LocalDateTime collectedAt;

    private String api;

    @Lob
    private String request;

    @Lob
    private String response;

    private int totalTokens;
}
