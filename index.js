// Your code here

    function createEmployeeRecord(employeeArray){

        const details = {
            firstName: employeeArray[0],
            familyName:employeeArray[1] ,
            title:employeeArray[2],
            payPerHour: employeeArray[3],
            timeInEvents: [],
            timeOutEvents: []


        }

        return details


        
        
    }



    function createEmployeeRecords(employeeArrays){

        return employeeArrays.map(createEmployeeRecord)



    }

    function createTimeInEvent(employee, dateStamp){
        let [date, hour] = dateStamp.split(" ")
        employee.timeInEvents.push({
            type: "TimeIn",
            date: date,
            hour: parseInt(hour, 10)
        })

        return employee

    }
    function createTimeOutEvent(employee, dateStamp){

        let [date, hour ] = dateStamp.split(" ")
        employee.timeOutEvents.push({
            type: "TimeOut",
            date: date,
            hour: parseInt(hour, 10)
        })

        return employee
 
    }

    function hoursWorkedOnDate(employee, date) {
        let timeIn = employee.timeInEvents.find(event => event.date === date);
        let timeOut = employee.timeOutEvents.find(event => event.date === date);
        return (timeOut.hour - timeIn.hour) / 100;
      }

      function wagesEarnedOnDate(employee, date) {
        return hoursWorkedOnDate(employee, date) * employee.payPerHour;

    
      }

      function allWagesFor(employee) {
        return employee.timeInEvents.reduce((total, event) => {
          return total + wagesEarnedOnDate(employee, event.date);
        }, 0);
      }

      function calculatePayroll(employees) {
        return employees.reduce((total, employee) => {
          return total + allWagesFor(employee);
        }, 0);
      }

      const employeesData = [
        ["John", "Doe", "Software Engineer", 50],
        ["Jane", "Smith", "Project Manager", 60]
      ];
      
      const employees = createEmployeeRecords(employeesData);
      createTimeInEvent(employees[0], "2024-03-18 0900");
      createTimeOutEvent(employees[0], "2024-03-18 1700");
      createTimeInEvent(employees[1], "2024-03-18 1000");
      createTimeOutEvent(employees[1], "2024-03-18 1800");
      
      console.log(allWagesFor(employees[0])); // Expected: 400 (8 hours * $50)
      console.log(allWagesFor(employees[1])); // Expected: 480 (8 hours * $60)
      console.log(calculatePayroll(employees)); // Expected: 880

