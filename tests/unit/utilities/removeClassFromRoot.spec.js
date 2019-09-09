import { expect } from 'chai';
import { removeClassFromRoot } from '@/utilities';

describe('Utilities: removeClassFromRoot', () => {
  it ('Is defined', () => {
    expect(removeClassFromRoot).to.exist;
  });

  it ('Remove a class to the root document element', () => {
    const root = document.documentElement;

    root.classList.add('foo')

    const before = root.classList.contains('foo');

    removeClassFromRoot('foo');

    const after = root.classList.contains('foo');

    expect(before === after).to.be.false;
  });

  it ('Throws an error if argument is not a string', () => {
    const err = removeClassFromRoot(true);

    expect(err instanceof Error).to.be.true;
  });
})
