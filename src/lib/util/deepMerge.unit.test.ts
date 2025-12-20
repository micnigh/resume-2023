import { describe, it, expect } from 'vitest';
import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should deeply merge nested objects', () => {
    type TargetType = { a: { x: number; y: number }; b: number };
    const target: TargetType = { a: { x: 1, y: 2 }, b: 3 };
    // Test that deepMerge can handle partial nested objects
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    const source = { a: { y: 4, z: 5 }, c: 6 } as any;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: { x: 1, y: 4, z: 5 }, b: 3, c: 6 });
  });

  it('should merge multiple sources', () => {
    type TargetType = { a: number };
    const target: TargetType = { a: 1 };
    const source1 = { b: 2 } as Partial<TargetType & { b: number }>;
    const source2 = { c: 3 } as Partial<TargetType & { c: number }>;
    const result = deepMerge(target, source1, source2);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should return target when no sources provided', () => {
    const target = { a: 1 };
    const result = deepMerge(target);
    expect(result).toBe(target);
  });

  it('should handle empty objects', () => {
    const result = deepMerge({}, { a: 1 });
    expect(result).toEqual({ a: 1 });
  });
});
