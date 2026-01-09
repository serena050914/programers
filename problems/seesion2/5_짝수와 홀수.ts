import { describe, test, expect } from 'vitest';

/**
 * 문제: 짝수와 홀수
 * 레벨: [1/2/3]
 * 링크: [프로그래머스 URL]
 * 
 * 문제 설명:
 * [여기에 문제 설명을 작성하세요]
 * 
 * 제한사항:
 * - [제한사항 1]
 * - [제한사항 2]
 */

const checkEven = (n: number): boolean=> {
    if(n%2===0) return true;
    return false;
}

function solution(n: number) {
    if(checkEven(n)===true) return "Even";
    return "Odd";
}

// ============================================
// 테스트 케이스
// ============================================

describe('짝수와 홀수', () => {
  test('예제 1', () => {
    expect(solution(/* 입력 */)).toEqual(/* 예상 결과 */);
  });

  test('예제 2', () => {
    expect(solution(/* 입력 */)).toEqual(/* 예상 결과 */);
  });

  test('추가 테스트 케이스', () => {
    expect(solution(/* 입력 */)).toEqual(/* 예상 결과 */);
  });
});

