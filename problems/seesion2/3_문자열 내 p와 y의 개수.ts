import { describe, test, expect } from 'vitest';

/**
 * 문제: 문자열 내 p와 y의 개수
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12916
 * 
 * 문제 설명:
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
 * 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
 * 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 * 
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 * 
 * 제한사항
 * 문자열 s의 길이 : 50 이하의 자연수
 * 문자열 s는 알파벳으로만 이루어져 있습니다.
 * 
 * 학습 포인트:
 * - 
 */

const countHowMany = (arr: string[], smallLetter:string, bigLetter:string): number => {
    let n=0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]===smallLetter || arr[i]===bigLetter) n++;
    }
    return n;
}

function solution(s: string) {
    let arr = s.split('');
    let pNumber = countHowMany(arr, 'p', 'P');
    let yNumber = countHowMany(arr, 'y', 'Y');
    
    if(pNumber===yNumber) return true;
    else return false;
}

// ============================================
// 테스트 케이스
// ============================================

describe('문자열 내 p와 y의 개수 비교', () => {
  test('예제 1: "pPoooyY" -> true', () => {
    expect(solution("pPoooyY")).toBe(true);
  });

  test('예제 2: "Pyy" -> false', () => {
    expect(solution("Pyy")).toBe(false);
  });
});