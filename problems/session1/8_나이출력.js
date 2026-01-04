import { describe, test, expect } from 'vitest';

/**
 * 문제: 나이 출력
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120820
 * 
 * 문제 설명:
 * 머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다.
 * 2022년 기준 선생님의 나이 age가 주어질 때,
 * 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요.
 * 
 * 제한사항:
 * - 0 < age ≤ 120
 * - 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.
 * 
 * 학습 포인트:
 * - 간단한 연산 문제
 */

function solution(age) {
    return 2023-age;
}

// ============================================
// 테스트 케이스
// ============================================

describe('나이 출력', () => {
    test('예제 1: 40살 → 1983년생', () => {
        expect(solution(40)).toBe(1983);
    });

    test('예제 2: 23살 → 2000년생', () => {
        expect(solution(23)).toBe(2000);
    });

    test('1살 → 2022년생', () => {
        expect(solution(1)).toBe(2022);
    });

    test('10살 → 2013년생', () => {
        expect(solution(10)).toBe(2013);
    });

    test('100살 → 1923년생', () => {
        expect(solution(100)).toBe(1923);
    });

    test('50살 → 1973년생', () => {
        expect(solution(50)).toBe(1973);
    });
});

