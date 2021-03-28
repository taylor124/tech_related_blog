test('format_text() returns a simplified text string', () => {
  const text1 = format_text('Css lessons');
  const text2 = format_text('Something about Javascript');
  const text3 = format_text('Come and learn Html with us');

  expect(text1).toBe('Css lessons');
  expect(text2).toBe('Something about Javascript');
  expect(text3).toBe('Come and learn Html with us');
});

const { format_text } = require('../utils/helpers');