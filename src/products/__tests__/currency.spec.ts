import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyProvider } from '../providers/currency';

describe('CurrencyProvider', () => {
  let provider: CurrencyProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyProvider],
    }).compile();

    provider = module.get<CurrencyProvider>(CurrencyProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
