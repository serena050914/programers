import { describe, test, expect } from 'vitest';

/**
 * 문제: 배열의 평균값
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120817
 * 
 * 문제 설명:
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항:
 * - 0 < numbers의 길이 ≤ 100
 * - 0 ≤ numbers의 원소 ≤ 1,000
 * 
 * 학습 포인트:
 * - for vs reduce
 * - 빈 배열 고려했는가?
 */

function solution(numbers) {
    let answer=numbers.reduce((arr, cur)=>arr+cur, 0);
    answer/=numbers.length;
    return Number(answer.toFixed(1));
}

// ============================================
// 테스트 케이스
// ============================================

describe('배열의 평균값', () => {
    test('예제 1: [1,2,3,4,5,6,7,8,9,10]의 평균은 5.5', () => {
        expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
    });

    test('예제 2: [89,90,91,92,93,94,95,96,97,98,99]의 평균은 94', () => {
        expect(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])).toBe(94);
    });

    test('엣지 케이스: 원소가 1개인 배열', () => {
        expect(solution([100])).toBe(100);
    });

    test('엣지 케이스: 모두 같은 숫자', () => {
        expect(solution([5, 5, 5, 5])).toBe(5);
    });

    test('0이 포함된 배열', () => {
        expect(solution([0, 10, 20, 30])).toBe(15);
    });

    // 빈 배열은 제한사항에서 제외 (0 < numbers의 길이)
});

