package br.dev.marcoalmeida.openaiPrimer.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    @Serial
    private static final long serialVersionUID = 3317686311392412458L;

    private String username;
    private String password;
    private String role;
    private String email;
}