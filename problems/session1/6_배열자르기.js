import { describe, test, expect } from 'vitest';

/**
 * 문제: 배열 자르기
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120833
 * 
 * 문제 설명:
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
 * numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록
 * solution 함수를 완성해보세요.
 * 
 * 제한사항:
 * - 2 ≤ numbers의 길이 ≤ 30
 * - 0 ≤ numbers의 원소 ≤ 1,000
 * - 0 ≤ num1 < num2 < numbers의 길이
 * 
 * 학습 포인트:
 * - slice vs splice 차이 설명 가능?
 *   - slice: 원본 배열을 변경하지 않고 새로운 배열 반환
 *   - splice: 원본 배열을 변경하고 제거된 요소를 반환
 */

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1);
}

// ============================================
// 테스트 케이스
// ============================================

describe('배열 자르기', () => {
    test('예제 1: [1,2,3,4,5]에서 인덱스 1~3', () => {
        expect(solution([1, 2, 3, 4, 5], 1, 3)).toEqual([2, 3, 4]);
    });

    test('예제 2: [1,3,5]에서 인덱스 1~2', () => {
        expect(solution([1, 3, 5], 1, 2)).toEqual([3, 5]);
    });

    test('첫 번째부터 자르기', () => {
        expect(solution([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2, 3]);
    });

    test('마지막까지 자르기', () => {
        expect(solution([1, 2, 3, 4, 5], 2, 4)).toEqual([3, 4, 5]);
    });

    test('한 개 요소만 자르기', () => {
        expect(solution([10, 20, 30, 40], 2, 2)).toEqual([30]);
    });

    test('전체 배열 자르기', () => {
        expect(solution([1, 2, 3], 0, 2)).toEqual([1, 2, 3]);
    });

    test('원본 배열은 변경되지 않음', () => {
        const original = [1, 2, 3, 4, 5];
        const result = solution(original, 1, 3);
        expect(original).toEqual([1, 2, 3, 4, 5]); // 원본 유지
        expect(result).toEqual([2, 3, 4]);
    });
});

