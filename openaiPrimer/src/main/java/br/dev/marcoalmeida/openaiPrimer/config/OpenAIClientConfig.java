package br.dev.marcoalmeida.openaiPrimer.config;

import feign.Logger;
import feign.Request;
import feign.RequestInterceptor;
import feign.Retryer;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Indexed;

import java.util.concurrent.TimeUnit;

@Configuration
@Indexed
@Data
@Slf4j
public class OpenAIClientConfig {
    @Value("${openai.http-client.read-timeout}")
    private int readTimeout;

    @Value("${openai.http-client.connect-timeout}")
    private int connectTimeout;

    @Value("${openai.apikey}")
    private String apiKey;

    @Value("${openai.gpt-model}")
    private String model;

    @Value("${openai.audio-model}")
    private String audioModel;

    @Bean
    public Request.Options options() {
        return new Request.Options(connectTimeout, TimeUnit.MILLISECONDS, readTimeout, TimeUnit.MILLISECONDS, true);
    }

    @Bean
    public Logger.Level feignLogger() {
        return Logger.Level.FULL;
    }

    @Bean
    public Retryer retryer() {
        return new Retryer.Default();
    }

    @Bean
    public RequestInterceptor apiKeyInterceptor() {
        return request -> request.header("Authorization", "Bearer " + apiKey);
    }
}