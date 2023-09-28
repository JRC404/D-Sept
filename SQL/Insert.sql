INSERT INTO Students
VALUES (1, "Bob Bobbington", "Manchester", 1);
-- Error Code: 1062. Duplicate entry '1' for key 'students.PRIMARY'

INSERT INTO Students
VALUES (2, "Steve Stevington", "Manchester", 1),
(3, "Tim Timmington", "Manchester", 1),
(4, "Bill Billington", "Birmingha", 0);

INSERT INTO Students (StudentID, FullName)
VALUES(5, "John Johnnington");

INSERT INTO Students(StudentID)
VALUES (6);

-- INSERT INTO Students(FullName, City, Enrolled)
-- VALUES("Paul Paullington", "Landan", 1);
-- Error Code: 1364. Field 'StudentID' doesn't have a default value

SELECT * FROM Students;