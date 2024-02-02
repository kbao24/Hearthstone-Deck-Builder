set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "cards" (
  "cardId" serial PRIMARY KEY,
  "name" text,
  "img" text,
  "rarity" text,
  "type" text,
  "class" text,
  "created_at" timestamptz(6) not null default now()
);

CREATE TABLE "deck" (
  "deckId" serial PRIMARY KEY,
  "userId" integer,
  "img" text,
  "name" text,
  "description" text,
  "cardCount" integer,
  "created_at" timestamptz(6) not null default now()
);

CREATE TABLE "deckCards" (
  "deckCardId" serial PRIMARY KEY,
  "deckId" integer,
  "cardId" integer
);

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "username" varchar,
  "role" varchar,
  "created_at" timestamptz(6) not null default now(),
  "password" text
);

ALTER TABLE "deck" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "deckCards" ADD FOREIGN KEY ("deckId") REFERENCES "deck" ("deckId");

ALTER TABLE "deckCards" ADD FOREIGN KEY ("cardId") REFERENCES "cards" ("cardId");
