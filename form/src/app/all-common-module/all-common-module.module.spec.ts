import { AllCommonModuleModule } from './all-common-module.module';

describe('AllCommonModuleModule', () => {
  let allCommonModuleModule: AllCommonModuleModule;

  beforeEach(() => {
    allCommonModuleModule = new AllCommonModuleModule();
  });

  it('should create an instance', () => {
    expect(allCommonModuleModule).toBeTruthy();
  });
});
