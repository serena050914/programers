import { describe, test, expect } from "vitest";

/**
 * 문제: 실패율
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42889
 *
 * 힌트: Array.from()으로 스테이지 배열 생성
 */

function solution(N: number, stages: number[]): number[] {
  // WEEK5: 여기에 코드를 작성하세요
  return [];
}

describe("실패율", () => {
  test("예제 1", () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
  });

  test("예제 2", () => {
    expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
  });

  test("모든 사용자가 클리어한 경우", () => {
    expect(solution(3, [4, 4, 4])).toEqual([1, 2, 3]);
  });

  test("스테이지가 1개인 경우", () => {
    expect(solution(1, [1, 1, 2])).toEqual([1]);
  });
});
