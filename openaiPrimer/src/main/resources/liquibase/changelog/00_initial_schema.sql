-- H2 2.1.214;
SET
DB_CLOSE_DELAY -1;
CREATE
USER IF NOT EXISTS "SA" SALT '0c89340d898b5b68' HASH '4a64228314d70d9fd3f90b2c9b80b4adc023d40f50e5633cc06ec4ffc0b6f62a' ADMIN;
CREATE
MEMORY TABLE "PUBLIC"."API_USAGE"(

    "ID" CHARACTER VARYING(255) NOT NULL,

    "API" CHARACTER VARYING(255),

    "COLLECTED_AT" TIMESTAMP(6),

    "REQUEST" CHARACTER LARGE OBJECT,

    "RESPONSE" CHARACTER LARGE OBJECT,

    "TOTAL_TOKENS" INTEGER NOT NULL

);
ALTER TABLE "PUBLIC"."API_USAGE"
    ADD CONSTRAINT "PUBLIC"."CONSTRAINT_D" PRIMARY KEY ("ID");
-- 1 +/- SELECT COUNT(*) FROM PUBLIC.API_USAGE;
INSERT INTO "PUBLIC"."API_USAGE"
VALUES ('chatcmpl-70uM2dU2IjfcQEsjnO5L6yRcmwWgX', 'openai', TIMESTAMP '2023-04-02 12:56:33.007771',
        '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Suggest me a good classic scifi book"}]}',
        '{"id":"chatcmpl-70uM2dU2IjfcQEsjnO5L6yRcmwWgX","object":"chat.completion","model":"gpt-3.5-turbo-0301","created":[4602888,7,8],"choices":[{"index":0,"message":{"role":"assistant","content":"\"Frankenstein\" by Mary Shelley is a classic science fiction book that explores the consequences of scientific experimentation and the ethics of creating intelligent life."},"finish_reason":"stop"}],"usage":{"prompt_tokens":"17","completion_tokens":"28","total_tokens":"45"}}',
        45),

       ('chatcmpl-70yeNfeYUYK35C1qgjfDKqu1m6w3k', 'openai', TIMESTAMP '2023-04-02 17:31:41.09943',
        '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Hello there again, let''s hope a database is in place"}]}',
        '{"id":"chatcmpl-70yeNfeYUYK35C1qgjfDKqu1m6w3k","object":"chat.completion","model":"gpt-3.5-turbo-0301","created":[4602933,9,24],"choices":[{"index":0,"message":{"role":"assistant","content":"Hello again! Yes, having a database in place is crucial for storing and managing large amounts of data efficiently. It helps to organize data and provides a centralized location for accessing and updating information. This can improve the reliability and accuracy of data, which is beneficial for making informed decisions and carrying out effective operations."},"finish_reason":"stop"}],"usage":{"prompt_tokens":"20","completion_tokens":"61","total_tokens":"81"}}',
        81);
