-- CODE WARS>>>>

-- SQL Basics: Simple WHERE and ORDER BY
SELECT *
FROM people
WHERE age > 50
ORDER BY age DESC;

-- SQL Basics: Simple SUM
SELECT SUM(age) AS age_sum FROM people;

-- SQL Basics: Simple MIN / MAX
SELECT MIN(age) AS age_min, MAX(age) as age_max FROM people;

-- Find all active students
SELECT * FROM students WHERE isActive = 1;

-- SQL Basics: Simple GROUP BY
SELECT age, COUNT(*) AS people_count FROM people GROUP BY age;

-- SQL Basics: Simple HAVING
SELECT age, COUNT(*) AS total_people FROM people GROUP BY age HAVING COUNT(*) >= 10;

-- SQLZOO Tutorial 5 >>>>>

-- 1. Show the total population of the world.
SELECT SUM(population)
FROM world

-- 2. List all the continents - just once each.
SELECT continent FROM world GROUP BY continent;

-- 3. Give the total GDP of Africa
SELECT SUM(GDP) FROM world WHERE continent = 'Africa';

-- 4. How many countries have an area of at least 1000000
SELECT COUNT(name) FROM world WHERE area >= 1000000;

-- 5. What is the total population of ('Estonia', 'Latvia', 'Lithuania')
SELECT SUM(population) AS total_population FROM world WHERE name IN ('Estonia', 'Latvia', 'Lithuania');

-- 6. For each continent show the continent and number of countries.
SELECT continent, COUNT(name) FROM world GROUP BY continent;

-- 7. For each continent show the continent and number of countries with populations of at least 10 million.
SELECT continent, COUNT(name) FROM world WHERE population >= 10000000 GROUP BY continent;

-- 8. List the continents that have a total population of at least 100 million.
SELECT continent FROM world GROUP BY continent HAVING SUM(population) > 100000000;