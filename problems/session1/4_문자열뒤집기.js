import { describe, test, expect } from 'vitest';

/**
 * 문제: 문자열 뒤집기
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181905
 * 
 * 문제 설명:
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
 * my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * 제한사항:
 * - my_string은 숫자와 알파벳으로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - 0 ≤ s ≤ e < my_string의 길이
 * 
 * 학습 포인트:
 * - 왜 split이 필요한가?
 * - 문자열은 immutable이라는 점 이해했는가?
 */

function solution(my_string, s, e) {
    return my_string
        .split("")
        .reduce((acc,cur,idx,arr)=>{
        if(idx>=s && idx<=e) acc+=arr[e+s-idx];
        else acc+=cur;
        return acc;
        }, "");
}

// ============================================
// 테스트 케이스
// ============================================

describe('문자열 뒤집기', () => {
    test('예제 1: "Progra21Sremm3"에서 인덱스 6~12 뒤집기', () => {
        expect(solution("Progra21Sremm3", 6, 12)).toBe("ProgrammerS123");
    });

    test('예제 2: "Stanley1yelnatS"에서 인덱스 4~10 뒤집기', () => {
        expect(solution("Stanley1yelnatS", 4, 10)).toBe("Stanley1yelnatS");
    });

    test('전체 문자열 뒤집기', () => {
        expect(solution("abc", 0, 2)).toBe("cba");
    });

    test('한 문자만 뒤집기 (변화 없음)', () => {
        expect(solution("hello", 2, 2)).toBe("hello");
    });

    test('첫 두 문자 뒤집기', () => {
        expect(solution("world", 0, 1)).toBe("owrld");
    });

    test('마지막 두 문자 뒤집기', () => {
        expect(solution("hello", 3, 4)).toBe("helol");
    });
});

