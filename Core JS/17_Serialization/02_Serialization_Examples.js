// Serialization and deserialization examples.

function safeSerialize(value) {
  return JSON.stringify(value);
}

function safeDeserialize(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Deserialize error', error.message);
    return null;
  }
}

const data = {
  id: 1,
  name: 'Test',
  nested: { active: true, tags: ['a', 'b'] }
};

const serialized = safeSerialize(data);
console.log('Serialized', serialized);
console.log('Deserialized', safeDeserialize(serialized));
