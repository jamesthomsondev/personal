import { expect } from 'chai';
import { addClassToRoot } from '@/utilities';

describe('Utilities: addClassToRoot', () => {
  it ('Is defined', () => {
    expect(addClassToRoot).to.exist;
  });

  it ('Adds a class to the root document element', () => {
    const root = document.documentElement;

    addClassToRoot('foo');

    expect(root.classList.contains('foo')).to.be.true;
  });

  it ('Throws an error if argument is not a string', () => {
    const err = addClassToRoot(true);

    expect(err instanceof Error).to.be.true;
  });
})
