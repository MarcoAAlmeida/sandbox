package br.dev.marcoalmeida.openaiPrimer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableFeignClients
@EnableWebSecurity
@EnableWebMvc
public class OpenaiPrimerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OpenaiPrimerApplication.class, args);
	}

}
