import { describe, test, expect } from 'vitest';

/**
 * 문제: 중복된 문자 제거
 * 레벨: 0
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120888
 * 
 * 문제 설명:
 * [여기에 문제 설명을 작성하세요]
 * 
 * 제한사항:
 * - 1 ≤ my_string ≤ 110
 * - my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
 * - 대문자와 소문자를 구분합니다.
 * - 공백(" ")도 하나의 문자로 구분합니다.
 * - 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
 */

function solution(my_string: string): string {
    const seen = new Set();

    return [...my_string]
    .filter(x => {
        if (seen.has(x)) {
            return false;
        }
        seen.add(x);
        return true;
    })
    .join('');
}

/* forEach + includes를 쓴 버전
function solution(my_string: string): string {
    const result = [];

    [...my_string]
    .forEach(x => {
        if (!result.includes(x)) {
            result.push(x);
        }
    });

    return result.join('');
}
*/

// ============================================
// 테스트 케이스
// ============================================

describe('[중복된 문자 제거]', () => {
  test('people 입력 시', () => {
    expect(solution('people')).toEqual('peol');
  });

  test('We are the world 입력시', () => {
    expect(solution('We are the world')).toEqual('We arthwold');
  });

});