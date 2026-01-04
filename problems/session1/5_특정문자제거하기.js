import { describe, test, expect } from 'vitest';

/**
 * 문제: 특정 문자 제거하기
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826
 * 
 * 문제 설명:
 * 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
 * my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항:
 * - 1 ≤ my_string의 길이 ≤ 100
 * - letter은 길이가 1인 영문자입니다.
 * - my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
 * - 대소문자를 구분합니다.
 * 
 * 학습 포인트:
 * - input 값에서 특정 문자 제거
 * - 검색어 정제
 */

function solution(my_string, letter) {
    return my_string
            .split("")
            .reduce((arr,cur)=>{
                if(cur!=letter) arr+=cur; //특정 문자 아닐시에만 배열에 추가
                return arr;
            }, "");
}

// ============================================
// 테스트 케이스
// ============================================

describe('특정 문자 제거하기', () => {
    test('예제 1: "abcdef"에서 "f" 제거', () => {
        expect(solution("abcdef", "f")).toBe("abcde");
    });

    test('예제 2: "BCBdbe"에서 "B" 제거', () => {
        expect(solution("BCBdbe", "B")).toBe("Cdbe");
    });

    test('여러 개의 같은 문자 제거', () => {
        expect(solution("aaabbbccc", "b")).toBe("aaaccc");
    });

    test('제거할 문자가 없는 경우', () => {
        expect(solution("hello", "z")).toBe("hello");
    });

    test('모든 문자가 제거 대상인 경우', () => {
        expect(solution("aaaa", "a")).toBe("");
    });

    test('대소문자 구분', () => {
        expect(solution("AaBbCc", "a")).toBe("ABbCc");
    });

    test('공백 제거', () => {
        expect(solution("hello world", " ")).toBe("helloworld");
    });
});

