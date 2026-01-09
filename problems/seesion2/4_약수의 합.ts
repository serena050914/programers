import { describe, test, expect } from 'vitest';

/**
 * 문제: 약수의 합
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12928
 * 
 * 문제 설명:
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 * 
 * 제한사항:
 * - n은 0 이상 3000이하인 정수입니다.
 */

const createRangeFromInput = (n: number): number[] =>
    Array.from({ length: n }, (_, i) => i + 1);

function solution(n: number) {
    let arr = createRangeFromInput(n);
    return arr.reduce((acc, cur) => {
        if (n % cur === 0) acc += cur;
        return acc;
    }, 0);
}

// ============================================
// 테스트 케이스
// ============================================

describe('약수의 합', () => {
  test('n=12일시', () => {
    expect(solution(12)).toBe(28);
  });

  test('n=5일 시', () => {
    expect(solution(5)).toBe(6);
  });
});

