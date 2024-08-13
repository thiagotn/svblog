import { getHashtags } from 'src/lib/utils/helpers';
import { describe, expect, it, toHaveLength } from 'vitest';

describe('getHashtags', () => {
  it('returns 4 hashtags', () => {
    const hashtags = getHashtags();
    expect(hashtags).toHaveLength(4);
  });

  it('returns the correct hashtags', () => {
    const hashtags = getHashtags();
    expect(hashtags).toEqual([
      '#blog',
      '#tech',
      '#tdd',
      '#cicd',
    ]);
  });
});
