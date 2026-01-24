import { describe, test, expect } from "vitest";

/**
 * 문제: 로또의 최고 순위와 최저 순위
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/77484
 */

function solution(lottos: number[], win_nums: number[]): number[] {
  // WEEK5: 여기에 코드를 작성하세요
  return [0, 0];
}

describe("로또의 최고 순위와 최저 순위", () => {
  test("예제 1", () => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([
      3, 5,
    ]);
  });

  test("예제 2", () => {
    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).toEqual([
      1, 6,
    ]);
  });

  test("예제 3", () => {
    expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toEqual([
      1, 1,
    ]);
  });

  test("모두 다른 번호", () => {
    expect(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])).toEqual([6, 6]);
  });
});
