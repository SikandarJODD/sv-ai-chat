import { boolean, integer, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth.schema";

let roleEnum = pgEnum("role", ["user", "assistant", "system"]);
let messageTypeEnum = pgEnum("message_type", ["text", "image", "video", "audio", "file"]);

export const conversation = pgTable("conversation", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    title: text("title").notNull().default("New Chat"),
    isPublic: boolean("is_public").notNull().default(false),
    tokenCount: integer("token_count").notNull().default(0),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const message = pgTable("message", {
    id: uuid("id").primaryKey().defaultRandom(),
    conversationId: uuid("conversation_id").notNull().references(() => conversation.id, { onDelete: "cascade" }),
    role: roleEnum("role").notNull().default("user"),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const messageAttachment = pgTable("message_attachment", {
    id: uuid("id").primaryKey().defaultRandom(),
    messageId: uuid("message_id").notNull().references(() => message.id, { onDelete: "cascade" }),
    url: text("url").notNull(),
    type: messageTypeEnum("type").notNull(),
    size: integer("size").notNull(), // Size in bytes
    createdAt: timestamp("created_at").notNull().defaultNow(),
});