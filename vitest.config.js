import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 테스트 환경 설정
    environment: 'node',
    
    // 테스트 파일 패턴
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', '**/problems/**/*.{js,ts}'],
    
    // 제외할 파일 패턴
    exclude: ['**/node_modules/**', '**/dist/**'],
    
    // 콘솔 출력 설정
    reporters: ['default'],
    
    // 더 안정적인 실행을 위한 설정
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    
    // silent: false로 설정하여 에러를 숨기지 않음
    silent: false,
  },
});
