# 프로그래머스 문제 풀이 템플릿

pnpm, Vitest, TypeScript를 사용한 프로그래머스 알고리즘 문제 풀이 프로젝트입니다.

## 🚀 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 프로젝트 구조

```
problems/
├── level1/
│   ├── 두개뽑아서더하기.js        # JavaScript 예제
│   └── 완주하지못한선수.ts        # TypeScript 예제
├── level2/
│   └── 기능개발.ts                # TypeScript 예제 (Level 2)
└── level3/
```

## 📝 문제 풀이 작성 방법

### JavaScript 예제

각 문제는 하나의 파일에 **문제 설명, 풀이 함수, 테스트 케이스**를 모두 작성합니다.

```javascript
import { describe, test, expect } from 'vitest';

/**
 * 문제: 두 개 뽑아서 더하기
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/68644
 */

function solution(numbers) {
  // 여기에 코드 작성
  const result = new Set();
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }
  
  return [...result].sort((a, b) => a - b);
}

// 테스트 케이스
describe('두 개 뽑아서 더하기', () => {
  test('예제 1', () => {
    expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  });
});
```

### TypeScript 예제

타입을 명시하여 더 안전한 코드를 작성할 수 있습니다.

```typescript
import { describe, test, expect } from 'vitest';

/**
 * 문제: 완주하지 못한 선수
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */

function solution(participant: string[], completion: string[]): string {
  const map = new Map<string, number>();
  
  for (const name of participant) {
    map.set(name, (map.get(name) || 0) + 1);
  }
  
  for (const name of completion) {
    const count = map.get(name)!;
    if (count === 1) {
      map.delete(name);
    } else {
      map.set(name, count - 1);
    }
  }
  
  return map.keys().next().value;
}

// 테스트 케이스
describe('완주하지 못한 선수', () => {
  test('예제 1', () => {
    expect(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toBe('leo');
  });
});
```

## 🧪 테스트 실행

### 모든 테스트 실행 (watch 모드)
```bash
pnpm test
```

### 특정 파일만 테스트
```bash
pnpm test 두개뽑아서더하기
```

또는

```bash
pnpm test problems/level1/두개뽑아서더하기.js
```

### 한 번만 실행 (watch 모드 없이)
```bash
pnpm test:run
```

### UI 모드로 테스트
```bash
pnpm test:ui
```

## 💡 팁

1. **파일명**: 문제 이름을 한글로 작성해도 됩니다 (예: `두개뽑아서더하기.js` 또는 `완주하지못한선수.ts`)
2. **레벨별 분류**: `problems/level1/`, `problems/level2/` 등으로 분류
3. **Watch 모드**: 파일 저장 시 자동으로 테스트가 실행됩니다
4. **특정 테스트만**: 파일명의 일부만 입력해도 해당 파일을 찾아 테스트합니다
5. **JS/TS 모두 지원**: 편한 언어로 작성하세요. TypeScript는 타입 안정성을 제공합니다.

## 📋 새 문제 추가하기

### JavaScript 사용 시
`template.js` 파일을 복사하여 시작하세요:

```bash
cp template.js problems/level1/새문제.js
```

### TypeScript 사용 시
`template.ts` 파일을 복사하여 시작하세요:

```bash
cp template.ts problems/level1/새문제.ts
```

## 📚 Vitest 주요 명령어

- `test()` 또는 `it()`: 개별 테스트 케이스
- `describe()`: 테스트 그룹화
- `expect()`: 결과 검증
- `test.only()`: 특정 테스트만 실행
- `test.skip()`: 특정 테스트 건너뛰기

## 🛠️ 기술 스택

- **pnpm**: 빠르고 효율적인 패키지 매니저
- **Vitest 2.1.9**: 빠른 테스트 프레임워크
- **TypeScript 5.9**: 타입 안정성 제공

더 자세한 내용은 [Vitest 공식 문서](https://vitest.dev/)를 참고하세요.

