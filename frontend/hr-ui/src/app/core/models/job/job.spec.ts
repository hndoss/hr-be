import { Job } from './job';

describe('Job', () => {
  it('should create an instance', () => {
    expect(new Job(0, "name", "description"))
      .toBeTruthy();
  });
});
