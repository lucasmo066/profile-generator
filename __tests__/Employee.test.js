const Employee = require('../lib/Employee');

test('creates an employee object', ()=>{
    const employee = new Employee('Lucas Moraes', 23, 'lucasmo23');

    expect(employee.Name).toBe('Mark');
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.Email).toEqual(expect.any(String));
});

test('gets employees name', ()=>{
    const employee = new Employee('Mark');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.Name.toString()));
})

test('gets employees id', ()=>{
    const employee = new Employee('Mark', 78);

    expect(employee.getId()).toEqual(expect.stringContaining(employee.ID.toString()));
})

test('gets employees email', ()=>{
    const employee = new Employee('Mark', 78, 'Mark7');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.Email.toString()));
})

test('returns the role', ()=>{
    const employee = new Employee('Mark')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})