import { describe, test, expect } from 'vitest';

/**
 * 문제: 짝수는 싫어요
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120813
 * 
 * 문제 설명:
 * 정수 n이 매개변수로 주어질 때,
 * n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항:
 * - 1 ≤ n ≤ 100
 * 
 * 학습 포인트:
 * - filter의 역할 설명 가능?
 * - 조건 로직이 명확한가?
 */

function solution(n) {
    let answer = [];
    for(let i=1; i<=n; i+=2) {
        answer.push(i);  //홀수일 때만 배열에 추가
    }
    return answer;
}

// ============================================
// 테스트 케이스
// ============================================

describe('짝수는 싫어요', () => {
    test('예제 1: n=10일 때 [1,3,5,7,9]', () => {
        expect(solution(10)).toEqual([1, 3, 5, 7, 9]);
    });

    test('예제 2: n=15일 때 [1,3,5,7,9,11,13,15]', () => {
        expect(solution(15)).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
    });

    test('엣지 케이스: n=1일 때 [1]', () => {
        expect(solution(1)).toEqual([1]);
    });

    test('엣지 케이스: n=2일 때 [1]', () => {
        expect(solution(2)).toEqual([1]);
    });

    test('n=3일 때 [1,3]', () => {
        expect(solution(3)).toEqual([1, 3]);
    });

    test('큰 수: n=20일 때', () => {
        expect(solution(20)).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    });
});

