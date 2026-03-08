import { describe, it, expect } from 'vitest';
import { NAVIGATION_ITEMS, NUTRITION_SUBMENU } from '@/lib/constants';

describe('Navigation Constants', () => {
  it('should have all required navigation items', () => {
    expect(NAVIGATION_ITEMS.length).toBeGreaterThan(0);
    expect(NAVIGATION_ITEMS).toContainEqual(
      expect.objectContaining({
        label: 'Início',
        href: '/',
      })
    );
  });

  it('should have nutrition submenu items', () => {
    expect(NUTRITION_SUBMENU.length).toBe(2);
    expect(NUTRITION_SUBMENU[0]?.label).toBe('Nutrição Clínica');
    expect(NUTRITION_SUBMENU[1]?.label).toBe('Nutrição Esportiva');
  });

  it('should have correct href for nutrition clinical', () => {
    const clinicalItem = NUTRITION_SUBMENU.find(item => item.label === 'Nutrição Clínica');
    expect(clinicalItem?.href).toBe('/nutrition/clinical');
  });

  it('should have correct href for nutrition sports', () => {
    const sportsItem = NUTRITION_SUBMENU.find(item => item.label === 'Nutrição Esportiva');
    expect(sportsItem?.href).toBe('/nutrition/sports');
  });
});
