UPDATE Students
SET City = "Manchester"
WHERE StudentID = 1;

-- IMPORTANT --
-- UPDATE is a part of the Danger Zone in SQL
-- Greatly affect the data structure if ran poorly
-- UPDATE requires 3 things: 
-- 1. The table we are updating
-- 2. The column we are updating
-- 3. The parameter / conditions we are focusing our update on
-- UPDATE SET WHERE

-- UPDATE Funding to range from 1000 to 60000. Please vary per student
UPDATE Students
SET FullName = "Will Willington"
WHERE StudentID = 6;

SELECT * FROM Students;