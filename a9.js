/*These are buttons */
let addPerson = document.getElementById("addEmployee")
let removePerson = document.getElementById("removeEmployee")
let clearPerson = document.getElementById("clear")
let roleBtn = document.getElementById("roleBtn")

/*These are elements*/
let employee = document.getElementById("name")
let position = document.getElementById("role")
let Ulist = document.getElementById("list")
let listItems = ""

//setting count so I can add to the array like employees[count].name SEE FUNCTION addEmployee
//made this so i can keep track of what is being addede to the array named "employees"
let count = 0

function Employee(name, role) {
    this.name = name;
    this.role = role;
}

let employees = []

addPerson.addEventListener("click", addEmployee);

let exists;//SEE FUNCTION ADD EMPLOYEE

function addEmployee() {
    workerName = employee.value;
    workerName = workerName.charAt(0).toUpperCase() + workerName.substr(1).toLowerCase()//So the first letter is capitalized
    workerRole = position.value;
    exists = employeeRead(workerName) //this function read every value in the array and lets me know if that value exists
    //if it does not exist (exists == false) the below code will happen 
    if (exists == false) {
        let newEmployee = new Employee(workerName, workerRole);
        employees.push(newEmployee)
        listItems += "<li>" + employees[count].name + " is a " + employees[count].role + "</li>"
        Ulist.innerHTML = listItems
        count++ //count will happen so I can add more objects without using a for loop and so I can keep track of what is being added

    }
    //if it does exist ()
    else {
        alert(workerName + " is already employed here")
    }
}

function employeeRead(person) {
    // Basically this reads through every element in the array and see if it exist in the function
    // Since the for loop reads every array IF i had put the "return false" code within the for loop in an else statement
    // It would constantly switched between true and false because it reads every individual element; the parameter will equal element at [0]
    // so it would be true when i = 0 but then would switch to false if element [1] isnt the same as parameter.
    // if i put the statement as below, if the parameter and element at [i] are the same it will stay true and not do anything else
    // since that is the ONLY conditional if statement. if parameter != element[i] then the if statement will never Execute and will
    // just return false
    for (i = 0; i < employees.length; i++) {
        if (person.toLowerCase() == employees[i].name.toLowerCase()) {
            return true
        }    
    }
    return false
}




removePerson.addEventListener("click", removeEmployee);


function removeEmployee() {
    alert(employees[employees.length - 1].name + " is no longer employed here.")
    //REMEMEBER .length != last item in the index.
    listItems = ""
    employees.pop()
    count = count - 1
    //i've gotten rid of one so i must subtract from the count so i can add a new one in the count order.
    for (let i = 0; i < employees.length; i++) {
        listItems += "<li>" + employees[i].name + " is a " + employees[i].role + "</li>";

    }
    Ulist.innerHTML = listItems
}

clearPerson.addEventListener("click", clearList)

function clearList() {
    listItems = ""
    count = count - employees.length
    employees = []
    Ulist.innerHTML = listItems

}
let countPut = document.getElementById("count")




roleBtn.addEventListener("click", countRoles)

function countRoles() {
    let managerCount = 0
    let employeeCount = 0
    for (i = 0; i < employees.length; i++) {
        if (employees[i].role == "Employee") {
            employeeCount++
        }
        else if (employees[i].role == "Manager") {
            managerCount++
        }

    }
    countPut.textContent = "Managers: " + managerCount + " Employees: " + employeeCount

}