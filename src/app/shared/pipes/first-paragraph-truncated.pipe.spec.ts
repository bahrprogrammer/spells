import { FirstParagraphTruncatedPipe } from './first-paragraph-truncated.pipe';

describe('FirstParagraphTruncatedPipe', () => {
  it('should create an instance', () => {
    const pipe = new FirstParagraphTruncatedPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the first paragraph element', () => {
    const testParagraphs = '<p>first</p><p>second</p><p>third</p>';
    const pipe = new FirstParagraphTruncatedPipe();
    const result = pipe.transform(testParagraphs);
    expect(result).toBe('<p>first</p>');
  });

  it('should return a string shorter than 150 characters', () => {
    const testParagraph = '<p>Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the monument and the mythic saga it depicts.</p>';
    const pipe = new FirstParagraphTruncatedPipe();
    const result = pipe.transform(testParagraph);
    expect(result.length).toBeLessThanOrEqual(150);
  });
});
