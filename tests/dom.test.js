import { find$, findAll$, on, off, bind$, create$ } from 'dom';
import { isElement } from 'index';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="base"></div>
    <div class="parent">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <button class="btn"></button>
    `;
});

describe('DOM TEST', () => {
  describe('find$', () => {
    it('should do the same thing as a queryselector', () => {
      const $base = find$('.base');
      expect($base).not.toBe(null);
      expect($base).toBeInTheDocument();
    });

    it('should find element in the parent element', () => {
      const $parent = find$('.parent');
      expect(find$('.item', $parent)).not.toBe(null);

      const $base = find$('.base');
      expect(find$('.item', $base)).toBe(null);
    });
  });

  describe('findAll$', () => {
    it('should do the same thing as a queryselectorAll', () => {
      const $base = find$('.base');
      expect($base).not.toBe(null);
      expect($base).toBeInTheDocument();
    });

    it('should find elements in the parent element', () => {
      const $parent = find$('.parent');
      expect(findAll$('.item', $parent).length).toBe(3);

      const $base = find$('.base');
      expect(findAll$('.item', $base).length).toBe(0);
    });
  });

  describe('on', () => {
    it('should be bind event listener', () => {
      const $base = find$('.base');
      const $btn = find$('.btn');

      const click = () => ($base.innerHTML = Number($base.innerHTML || 0) + 1);
      on($btn, 'click', click);

      $btn.click();
      expect($base.innerHTML).toBe('1');
    });
  });

  describe('off', () => {
    it('should be remove event listener', () => {
      const $base = find$('.base');
      const $btn = find$('.btn');

      const click = () => ($base.innerHTML = Number($base.innerHTML || 0) + 1);
      on($btn, 'click', click);

      $btn.click();
      expect($base.innerHTML).toBe('1');

      off($btn, 'click', click);
      $btn.click();
      expect($base.innerHTML).toBe('1');
    });
  });

  describe('bind$', () => {
    it('should be bind event listener at parent', () => {
      const $base = find$('.base');

      let clickCount = 0;
      bind$($base, 'click', '.dynamic', (e) => {
        e.currentTarget.innerHTML = 'clicked';
        clickCount++;
      });

      $base.click();
      expect(clickCount).toBe(0);

      const $div = document.createElement('div');
      $div.className = 'dynamic';
      $div.textContent = 'dynamic';
      $base.appendChild($div);

      $div.click();
      expect(clickCount).toBe(1);
      expect($div.innerHTML).toBe('clicked');
    });

    it('only execute the listener if the condition callback returns true', () => {
      const $base = find$('.base');

      let clickCount = 0;
      bind$(
        $base,
        'click',
        '.dynamic',
        (e) => {
          e.currentTarget.innerHTML = 'clicked';
          clickCount++;
        },
        (parent, target) =>
          parent.classList.contains('selected') &&
          target.classList.contains('active')
      );

      const $div = document.createElement('div');
      $div.className = 'dynamic';
      $div.textContent = 'dynamic';
      $base.appendChild($div);

      $div.click();
      expect(clickCount).toBe(0);
      expect($div.innerHTML).toBe('dynamic');

      $base.classList.add('selected');
      $div.classList.add('active');
      $div.click();
      expect(clickCount).toBe(1);
      expect($div.innerHTML).toBe('clicked');
    });
  });

  describe('create$', () => {
    it('should do the same thing as a createElement', () => {
      const $div = create$('div');
      expect(isElement($div)).toBe(true);
    });

    it('can be created with options', () => {
      const $div = create$('div', {
        id: 'id',
        className: 'className',
        classList: ['classList'],
        role: 'button',
        dataset: { action: 'none' },
        innerHTML: 'btn',
        ariaSelected: 'false',
      });

      expect($div.id).toBe('id');
      expect($div.classList.contains('className')).toBe(true);
      expect($div.classList.contains('classList')).toBe(true);
      expect($div.role).toBe('button');
      expect($div.dataset.action).toBe('none');
      expect($div.innerHTML).toBe('btn');
      expect($div.ariaSelected).toBe('false');
    });
  });
});
