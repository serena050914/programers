import { describe, test, expect } from 'vitest';

/**
 * 문제: 정수 제곱근 판별
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

function solution(n) {
    let squareRoot = n**0.5;

    if(Number.isInteger(squareRoot)) return (squareRoot+1)**2;
    return -1;
}

// ============================================
// 테스트 케이스
// ============================================

describe('[문제 제목]', () => {
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

