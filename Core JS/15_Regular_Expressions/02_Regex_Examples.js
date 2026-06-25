// Regular expression examples with groups and lookarounds.

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log('Email valid:', emailPattern.test('hello@example.com'));

const phonePattern = /^(\+\d{1,3}\s?)?(\d{3})[\s.-]?(\d{3})[\s.-]?(\d{4})$/;
const phone = '+1 555-123-4567';
const phoneMatch = phone.match(phonePattern);
console.log('Phone match groups:', phoneMatch ? phoneMatch.slice(1) : null);

const captureExample = /(?<protocol>https?):\/\/(?<domain>[\w.-]+)\/?.*/;
const url = 'https://example.com/path';
const result = url.match(captureExample);
console.log('Captured URL groups:', result?.groups);

const lookaheadExample = /\b\w+(?=\sis\b)/g;
console.log('Lookahead matches:', 'this is a test'.match(lookaheadExample));

const negativeLookahead = /foo(?!bar)/;
console.log('Negative lookahead result:', negativeLookahead.test('foobar'), negativeLookahead.test('foobaz'));
