// SELECT Salary AS secondHighestSalary FROM Employee e WHERE 2=(SELECT COUNT(DISTINCT Salary) FROM Employee p WHERE e.Salary<=p.Salary)

//Above only returns the secondHighestSalary but is not exactly what we are looking for. We want a NULL value returned if nothing is there


//THIS IS HOW WE DO IT #176
// SELECT MAX(Salary) AS SecondHighestSalary
// FROM Employee
// WHERE Salary < (SELECT MAX(Salary) FROM Employee)