/*
=========================================
REGEX GROUPS AND LOOKAROUND
=========================================

This file demonstrates capture groups, lookahead, lookbehind, and replacement.
*/

const text = 'test@example.com';
const emailRegex = /^(?<user>[\w.-]+)@(?<domain>[\w.-]+)\.(?<tld>\w+)$/;
const match = text.match(emailRegex);
if (match) {
  console.log('user', match.groups.user);
  console.log('domain', match.groups.domain);
  console.log('tld', match.groups.tld);
}

const input = 'abc123';
const lookaheadRegex = /\w+(?=\d+)/;
console.log(input.match(lookaheadRegex));

const lookbehindRegex = /(?<=\D)\d+/;
console.log(input.match(lookbehindRegex));

const masked = text.replace(/^(.)(.*)(.@.*)$/, '$1***$3');
console.log(masked);

/*
Explanation:
- named capture groups capture parts of a match by name.
- lookahead matches only if the following text satisfies the pattern.
- lookbehind matches only if the preceding text satisfies the pattern.
- replace uses captured groups in the replacement string.
*/