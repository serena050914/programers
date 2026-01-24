import { describe, test, expect } from 'vitest';

/**
 * 문제: 짝수와 홀수
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12937
 * 
 * 문제 설명:
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 * 
 * 제한사항:
 * - num은 int 범위의 정수입니다.
 * - 0은 짝수입니다.
 */

const checkEven = (n: number): boolean=> {
    // if(n%2===0) return true;
    // return false;
    return n%2===0;
}

function solution(n: number): string {
    if(checkEven(n)===true) return "Even";
    return "Odd";
}

// ============================================
// 테스트 케이스
// ============================================

describe('짝수와 홀수', () => {
  test('n이 3일 때', () => {
    expect(solution(3)).toBe('Odd');
  });

  test('n이 4일 때', () => {
    expect(solution(4)).toBe('Even');
  });

});

