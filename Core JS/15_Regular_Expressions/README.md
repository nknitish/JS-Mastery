# Regular Expressions

## What is it?
Regular expressions are patterns used to match character combinations in strings. They are essential for validation, parsing, and search operations.

## Why it matters
Regex is a powerful tool for input validation, text extraction, and transforming strings without writing verbose manual checks.

## Topics covered
- groups and capturing
- lookahead and lookbehind
- replace and match operations
- split and validation patterns

## Interview questions and answers

### What is a capturing group?
A capturing group is a portion of a regex enclosed in parentheses. It saves matched text for later use in replacements or extraction.

### How do lookahead and lookbehind differ?
Lookahead checks text that follows a pattern without including it in the match. Lookbehind checks text that precedes a pattern without including it in the match.

### When should you use `replace` with regex?
Use regex replace to transform string patterns efficiently, like formatting phone numbers or sanitizing input.

### How do you validate input with regex?
Use anchors (`^` and `$`) to ensure the entire string matches the pattern.

## Quick revision
- use `()` for capturing and `(?: )` for non-capturing.
- `(?=...)` is positive lookahead; `(?!...)` is negative lookahead.
- `(?<=...)` is positive lookbehind; `(?<!...)` is negative lookbehind.
- `g` global flag repeats matches; `i` ignores case.
