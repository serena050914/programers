import { describe, test, expect } from 'vitest';

/**
 * 문제: 두 수의 연산값 비교하기
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181938
 * 
 * 문제 설명:
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
 * 예를 들면 다음과 같습니다.
 * - 12 ⊕ 3 = 123
 * - 3 ⊕ 12 = 312
 * 
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return 하는
 * solution 함수를 완성해 주세요.
 * 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
 * 
 * 제한사항:
 * - 1 ≤ a, b < 10,000
 * 
 * 학습 포인트:
 * - 조건문 분기 훈련
 */

function solution(a, b) {
    let arr=[], plus, times=2*a*b;
    
    while(b>0) {
        arr.push(b%10);
	        b=Math.floor(b/10);  //b 일의자리 숫자부터 배열에 저장
    }
    
    while(a>0) {
        arr.push(a%10);
        a=Math.floor(a/10);  //a 일의자리 숫자부터 배열에 저장
    }
    
    arr.reverse();
    plus=Number(arr.join(""));  //배열 정수로 변환
    
    if(times>plus) return times;  //더 큰 것 반환
    else return plus;  
    
}

// ============================================
// 테스트 케이스
// ============================================

describe('두 수의 연산값 비교하기', () => {
    test('예제 1: 2 ⊕ 91 = 291, 2*2*91 = 364 → 364', () => {
        expect(solution(2, 91)).toBe(364);
    });

    test('예제 2: 91 ⊕ 2 = 912, 2*91*2 = 364 → 912', () => {
        expect(solution(91, 2)).toBe(912);
    });

    test('concatenated가 더 큰 경우', () => {
        expect(solution(5, 3)).toBe(53); // 53 vs 30
    });

    test('multiplied가 더 큰 경우', () => {
        expect(solution(2, 5)).toBe(25); // 25 vs 20
    });

    test('두 값이 같은 경우 - concatenated 반환', () => {
        // 예: 1 ⊕ 5 = 15, 2*1*5 = 10
        expect(solution(1, 5)).toBe(15);
    });

    test('작은 수들', () => {
        expect(solution(1, 1)).toBe(11); // 11 vs 2
    });

    test('큰 수들', () => {
        expect(solution(100, 200)).toBe(100200); // 100200 vs 40000
    });

    test('순서 바뀐 경우', () => {
        expect(solution(5, 2)).toBe(52); // 52 vs 20
        expect(solution(2, 5)).toBe(25); // 25 vs 20
    });
});

