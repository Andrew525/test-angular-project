import { FileSizePipe } from './fileSize.pipe';

describe('FilesizePipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizePipe();
    expect(pipe).toBeTruthy();
  });
});
