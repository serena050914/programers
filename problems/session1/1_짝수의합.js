import { describe, test, expect } from 'vitest';

/**
 * 문제: 짝수의 합
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120831
 * 
 * 문제 설명:
 * 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항:
 * - 0 < n ≤ 1000
 * 
 * 학습 포인트:
 * - 반복 범위 설명 가능?
 * - 조건을 if vs step 중 무엇으로 선택했는가?
 */

function solution(n) {
    let answer=0;
    for(let i=2; i<=n; i+=2) {
        answer+=i;
    }
    return answer;
}

// ============================================
// 테스트 케이스
// ============================================

describe('짝수의 합', () => {
    test('예제 1: n=10일 때 2+4+6+8+10=30', () => {
        expect(solution(10)).toBe(30);
    });

    test('예제 2: n=4일 때 2+4=6', () => {
        expect(solution(4)).toBe(6);
    });

    test('엣지 케이스: n=1일 때 0', () => {
        expect(solution(1)).toBe(0);
    });

    test('엣지 케이스: n=2일 때 2', () => {
        expect(solution(2)).toBe(2);
    });

    test('큰 수: n=100일 때', () => {
        // 2+4+6+...+100 = 2(1+2+3+...+50) = 2 * (50*51/2) = 2550
        expect(solution(100)).toBe(2550);
    });
});

