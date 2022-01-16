const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Lucas', 23, 'lucasmo6', 432);

    expect(manager.Name).toBe('Lucas');
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.Email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('sets role to manager', () => {
    const manager = new Manager('Lucas', 23, 'lucasmo6', 432);

    expect(manager.getRole()).toEqual('Manager');
})