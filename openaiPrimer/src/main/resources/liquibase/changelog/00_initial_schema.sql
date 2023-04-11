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
        81),
       ('chatcmpl-71j2n1V1oKfKhRPGYOUrOO2Nb418p', 'openai', TIMESTAMP '2023-04-04 19:04:12.928266',
        '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Can I use Java records to generate JSON, can they be DTOs too?  Give me a short code example"}]}',
        '{"id":"chatcmpl-71j2n1V1oKfKhRPGYOUrOO2Nb418p","object":"chat.completion","model":"gpt-3.5-turbo-0301","created":[4603422,1,2],"choices":[{"index":0,"message":{"role":"assistant","content":"Yes, Java records can be used to generate JSON and can also be used as DTOs (Data Transfer Objects). Here is a short code example:\n\nAssuming we have a record class named \"Person\" with fields name, age, and address. We can use the Jackson library to generate JSON from the record instance.\n\n```\nimport com.fasterxml.jackson.core.JsonProcessingException;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\npublic record Person(String name, int age, String address) {}\n\npublic class Main {\n    public static void main(String[] args) throws JsonProcessingException {\n        // Create a new instance of Person\n        Person person = new Person(\"John\", 30, \"123 Main St\");\n\n        // Create an ObjectMapper to convert the record to JSON\n        ObjectMapper objectMapper = new ObjectMapper();\n        String json = objectMapper.writeValueAsString(person);\n\n        // Print the JSON string\n        System.out.println(json);\n    }\n}\n```\n\nThis will output the following JSON:\n\n```\n{\"name\": \"John\", \"age\": 30, \"address\": \"123 Main St\"}\n```\n\nWe can also use the Person record as a DTO to transfer data between layers in our application. For example:\n\n```\npublic class PersonService {\n    public Person getPersonById(int id) {\n        // Retrieve person data from database\n        // ...\n\n        // Map the database result set to Person record\n        return new Person(\"John\", 30, \"123 Main St\");\n    }\n}\n\npublic class PersonController {\n    private final PersonService service;\n\n    public PersonController(PersonService service) {\n        this.service = service;\n    }\n\n    public String getPersonById(int id) throws JsonProcessingException {\n        // Retrieve person data from service layer\n        Person person = service.getPersonById(id);\n\n        // Convert the Person record to JSON\n        ObjectMapper objectMapper = new ObjectMapper();\n        return objectMapper.writeValueAsString(person);\n    }\n}\n```"},"finish_reason":"stop"}],"usage":{"prompt_tokens":"31","completion_tokens":"384","total_tokens":"415"}}',
        415),
       ('chatcmpl-726TI1JS3cP8Mx30cQLfVZZRoCUyT', 'openai', TIMESTAMP '2023-04-05 20:05:13.451057',
        '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Please demonstrate how you can compose a fugue in ABC notation, make it sound cheerful"}]}',
        '{"id":"chatcmpl-726TI1JS3cP8Mx30cQLfVZZRoCUyT","object":"chat.completion","model":"gpt-3.5-turbo-0301","created":[4603668,7,25],"choices":[{"index":0,"message":{"role":"assistant","content":"Note: As an AI language model, I don''t have the ability to compose melodies or music, but here is an example of how ABC notation might look for a cheerful fugue.\n\nX:1\nT:Fugue in C Major\nM:4/4\nL:1/8\nQ:1/4=120\nK:C\n%%score T1 T2 B\nV:T1           clef=treble\nV:T2           clef=treble\nV:B            clef=bass\n% 1\n[V:T1] B2 G2   c4  d2 f2   | e4 B2 G2  | c4 e4  | d4 C4  | B4 z4   |]\n[V:T2] e4 c4 | B4 e4  | d4 f4  | e4 f4   | g4 z4    |]\n[V:B]  C4 G3   z4 G3 C,3  | C,3 G,3 C3 | E3 G3 Be   | d2 A2 d2  :|\n% 2 \n[V:T1] G2 B2   e4 c2 A2  | G4 B2 G2 | c4 e4  | d4 C4  | B4 z4   |]\n[V:T2] A4 F4 | G4 B,4  | C4 E4  | E4 F4   | G4 G4    |]\n[V:B]  C4 G3   z4 G3 C,3  | C,3 G,3 C3 | E3 G3 Be   | d2 A2 d2  :|\n% 3\n[V:T1] G4 B4  | c4 e4  | f4 e4  | d4 C4  | B4 z4   |]\n[V:T2] A4 F4 | G4 B,4  | C4 E4  | E4 F4   | G4 G4    |]\n[V:B]  C4 G3   z4 G3 C,3  | C,3 G,3 C3 | E3 G3 Be   | d2 A2 d2  :|\n% 4 \n[V:T1] G2 B2   e4 c2 A2  | G4 B2 G2 | c4 e4  | d4 C4  | B4 z4   |]\n[V:T2] A4 F4 | G4 B,4  | C4 E4  | E4 F4   | G4 G4    |]\n[V:B]  C4 G3   z4 G3 C,3  | C,3 G,3 C3 | E3 G3 Be   | d2 A2 d2  :|\n% 5 \n[V:T1] B2 G2   c4 d2 f2   | e4 B2 G2  | c4 e4  | d4 C4  | B4 z4   |]\n[V:T2] e4 c4 | B4 e4  | d4 f4  | e4 f4   | g4 z4    |]\n[V:B]  C4 G3   z4 G3 C,3  | C,3 G,3 C3 | E3 G3 Be   | d2 A2 d2  :|\n\nThis is just an example of how ABC notation might look for a cheerful fugue, but the actual melody would require a lot more work to create."},"finish_reason":"stop"}],"usage":{"prompt_tokens":"25","completion_tokens":"756","total_tokens":"781"}}',
        781);
;
;
