import { describe, test, expect } from 'vitest';

/**
 * 문제: 자연수 뒤집어 배열로 만들기
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12932
 * 
 * 문제 설명:
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 * 
 * 제한사항:
 * - n은 10,000,000,000이하인 자연수입니다.
 */

function solution(n: number): number[] {
    return n
    .toString()
    .split("")
    .reverse()
    .map(Number);
}

// ============================================
// 테스트 케이스
// ============================================

describe('자연수 뒤집어 배열로 만들기', () => {
  test('예제 12345', () => {
    expect(solution(12345)).toEqual([5,4,3,2,1]);
  });

});