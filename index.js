// index.js
const inquirer = require('inquirer');
const {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
} = require('./queries');

const mainMenu = async () => {
    const answers = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ],
    });

    switch (answers.action) {
        case 'View all departments':
            console.table(await getDepartments());
            break;
        case 'View all roles':
            console.table(await getRoles());
            break;
        case 'View all employees':
            console.table(await getEmployees());
            break;
        case 'Add a department':
            const { departmentName } = await inquirer.prompt({
                name: 'departmentName',
                type: 'input',
                message: 'Enter the name of the department:',
            });
            await addDepartment(departmentName);
            console.log(`Added department: ${departmentName}`);
            break;
        case 'Add a role':
            const roleAnswers = await inquirer.prompt([
                {
                    name: 'title',
                    type: 'input',
                    message: 'Enter the role title:',
                },
                {
                    name: 'salary',
                    type: 'input',
                    message: 'Enter the role salary:',
                },
                {
                    name: 'department_id',
                    type: 'input',
                    message: 'Enter the department ID for the role:',
                },
            ]);
            await addRole(roleAnswers.title, roleAnswers.salary, roleAnswers.department_id);
            console.log(`Added role: ${roleAnswers.title}`);
            break;
        case 'Add an employee':
            const employeeAnswers = await inquirer.prompt([
                {
                    name: 'first_name',
                    type: 'input',
                    message: 'Enter the employee\'s first name:',
                },
                {
                    name: 'last_name',
                    type: 'input',
                    message: 'Enter the employee\'s last name:',
                },
                {
                    name: 'role_id',
                    type: 'input',
                    message: 'Enter the role ID for the employee:',
                },
                {
                    name: 'manager_id',
                    type: 'input',
                    message: 'Enter the manager ID for the employee (leave blank if none):',
                },
            ]);
            await addEmployee(employeeAnswers.first_name, employeeAnswers.last_name, employeeAnswers.role_id, employeeAnswers.manager_id || null);
            console.log(`Added employee: ${employeeAnswers.first_name} ${employeeAnswers.last_name}`);
            break;
        case 'Update an employee role':
            const updateAnswers = await inquirer.prompt([
                {
                    name: 'employee_id',
                    type: 'input',
                    message: 'Enter the employee ID to update:',
                },
                {
                    name: 'role_id',
                    type: 'input',
                    message: 'Enter the new role ID for the employee:',
                },
            ]);
            await updateEmployeeRole(updateAnswers.employee_id, updateAnswers.role_id);
            console.log(`Updated employee ID ${updateAnswers.employee_id} to role ID ${updateAnswers.role_id}`);
            break;
        case 'Exit':
            process.exit();
            break;
        default:
            console.log(`Invalid action: ${answers.action}`);
            break;
    }

    mainMenu();
};

mainMenu();
