const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Lucas', 23, 'lucasmo23');

    expect(employee.Name).toBe('Lucas');
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.Email).toEqual(expect.any(String));
});

test('gets employees name', () => {
    const employee = new Employee('Lucas');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.Name.toString()));
})

test('gets employees id', () => {
    const employee = new Employee('Lucas', 23);

    expect(employee.getId()).toEqual(expect.stringContaining(employee.ID.toString()));
})

test('gets employees email', () => {
    const employee = new Employee('Lucas', 23, 'lucasmo6');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.Email.toString()));
})

test('returns the role', () => {
    const employee = new Employee('Lucas')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})