export interface InitSchema {
  unitTestRunner?: 'jest' | 'vitest' | 'none';
  e2eTestRunner?: 'cypress' | 'none';
  skipFormat?: boolean;
  js?: boolean;
}