const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('Should add two numbers',() => {
  const result = add(3, 4);
  // if the result is something
  expect(result).toBe(7)
})

test('This will show greetings', () => {
  const result = generateGreeting('Saerom')
  expect(result).toBe('Hello Saerom')
})

test('Should show greetings', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous')
})

