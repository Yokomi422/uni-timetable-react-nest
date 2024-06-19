-- データベースの作成
CREATE DATABASE uni_timetable_db;

-- データベースの切り替え
\c uni_timetable_db;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (email, password) VALUES ('test@example.com', 'password');
