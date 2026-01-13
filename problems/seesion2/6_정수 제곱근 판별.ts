import { describe, test, expect } from 'vitest';

/**
 * 문제: 정수 제곱근 판별
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12934
 * 
 * 문제 설명:
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
 * n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 * 
 * 제한사항:
 * n은 1이상, 50000000000000 이하인 양의 정수입니다.
 */

function solution(n: number): number {
    let squareRoot = n**0.5;

    if(Number.isInteger(squareRoot)) return (squareRoot+1)**2;
    return -1;
}

// ============================================
// 테스트 케이스
// ============================================

describe('정수 제곱근 판별', () => {
  test('n이 121일 때', () => {
    expect(solution(121)).toBe(144);
  });

  test('n이 3일 때', () => {
    expect(solution(3)).toBe(-1);
  });

});

