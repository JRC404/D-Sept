-- CRUD
-- CREATE: CREATE and INSERT INTO
-- READ: SELECT
-- UPDATE: UPDATE and ALTER / MODIFY
-- DELETE: DELETE

CREATE DATABASE College;
-- Error Code: 1007. Can't create database 'college'; database exists
USE College;
-- You can't create two databases with the same name in the same location
-- I need to select the database I want to use -- USE College;

CREATE TABLE Students (
	StudentID int PRIMARY KEY, -- whole number 0-9
    FullName varchar(255), -- variable character == string
    City varchar(255),
    enrolled bit -- 1 or 0... similar to the boolean
)

-- PRIMARY KEY is our main 'unique' identifier
-- You can use the keyword 'unique' on different entries