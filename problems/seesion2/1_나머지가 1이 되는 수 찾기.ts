import { describe, test, expect } from 'vitest';

/**
 * 문제: 나머지가 1이 되는 수 찾기
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/87389
 * 
 * 문제 설명:
 * 
 * 자연수 n이 매개변수로 주어집니다.
 * n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 
 * 답이 항상 존재함은 증명될 수 있습니다.

 * 제한사항
 * 3 ≤ n ≤ 1,000,000
 * 
 * 학습 포인트:
 * 
 */

const makingRestOne = (n: number): number => {
    for (let i = 1; i < n; i++) {
        if (n % i === 1) return i;
    }
    return n - 1;
}

function solution(n: number): number {
    return makingRestOne(n);
}

// ============================================
// 테스트 케이스
// ============================================

describe('나머지가 1이 되는 수 찾기', () => {
    test('예제 1: n=10일 때', () => {
        expect(solution(10)).toBe(3);
    });

    test('예제 2: n=12일 때', () => {
        expect(solution(12)).toBe(11);
    });
});