-- Alter
ALTER TABLE Students
ADD Driver bit;

-- DANGER ZONE --
ALTER TABLE Students
DROP COLUMN Driver;
--

ALTER TABLE Students
ADD Driver varchar(255);

-- Made an error, I want Driver to be a bit data type
ALTER TABLE Students
MODIFY COLUMN Driver bit;

SELECT * FROM Students;
