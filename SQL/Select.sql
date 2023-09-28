SELECT * FROM Students;
-- * is a wildcard. SELECT EVERYTHING FROM Students

SELECT StudentID, City
FROM Students;
-- Clutter, bias

SELECT StudentID, City
FROM Students
WHERE Enrolled = 1;

SELECT * FROM STUDENTS
WHERE Funding < 10000;

SELECT * FROM Students
WHERE Funding BETWEEN 5000 AND 25000;

SELECT MIN(Funding)
FROM Students;

SELECT MIN(Funding) AS LowestFunding
FROM Students;

SELECT MAX(Funding) AS HighestFunding
FROM Students;

SELECT SUM(Funding) AS TotalFunding
FROM Students;