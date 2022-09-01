import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/vue';
import Event from "./2-scopedSlot-vnode"

test('test scoped slots', (done) => {
  render(Event);
  setTimeout(() => {
      const linkElement = screen.getByText(/vnode-/);
      expect(linkElement).toBeInTheDocument()
      const linkElement1 = screen.getByText(/scopedSlotA-attr1/);
      expect(linkElement1).toBeInTheDocument()
      const linkElement2 = screen.getByText(/slotA/);
      expect(linkElement2).toBeInTheDocument()
      done()
  });
});