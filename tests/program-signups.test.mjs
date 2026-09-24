import assert from 'node:assert/strict';
import test from 'node:test';
import { programs } from '../src/data/content.ts';

// Published forms verified in the YouthNYC Tally account.
const expectedForms = {
  sports: '445P65',
  educational: 'dWrQOV',
  language: '7RG4Q2',
  afterschool: 'VLgor6',
  art: 'eq494x',
};

for (const [programId, formId] of Object.entries(expectedForms)) {
  test(`${programId} signup opens its own published Tally form`, () => {
    const program = programs.find(({ id }) => id === programId);
    assert.ok(program);
    assert.equal(program.signUpUrl, `https://tally.so/r/${formId}`);
    assert.equal(program.cta.href, program.signUpUrl);
    assert.equal(program.cta.label, 'Sign Up');
  });
}
