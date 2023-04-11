package br.dev.marcoalmeida.openaiPrimer.dtos;

public record ExchangeID(String id){
    public static ExchangeID of(String id) {
        return new ExchangeID(id);
    }
};
