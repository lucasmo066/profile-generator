const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Lucas', 23, 'lucasmo6', 'UGA');

    expect(intern.Name).toBe('Lucas');
    expect(intern.ID).toEqual(expect.any(Number));
    expect(intern.Email).toEqual(expect.any(String));
    expect(intern.School).toEqual('UGA');
})

test('returns school', () => {
    const intern=new Intern('Lucas', 23, 'lucasmo6', 'UGA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.School.toString()));
})

test('returns role as Intern', () => {
    const intern = new Intern('Lucas', 23, 'lucasmo6', 'UGA');

    expect(intern.getRole()).toEqual('Intern');
})