import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { SqlTestHelper, createSqlTest } from "../../utils/sqlTestHelper";
import { resolve } from "path";

/**
 * 문제: 평균 일일 대여 요금 구하기
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/151136
 */

const SQL_FILE = resolve(__dirname, "sql/4_평균_일일_대여_요금_구하기.sql");

describe("평균 일일 대여 요금 구하기", () => {
  let sqlTest: ReturnType<typeof createSqlTest>;
  let helper: SqlTestHelper;

  beforeEach(() => {
    sqlTest = createSqlTest();
    helper = sqlTest.setup();
  });

  afterEach(() => {
    sqlTest.cleanup();
  });

  test("SUV의 평균 일일 대여 요금을 조회해야 한다", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    expect(result.length).toBe(1);
    expect(result[0]).toHaveProperty("AVERAGE_FEE");
  });

  test("AVERAGE_FEE는 정수여야 한다 (소수 첫째 자리에서 반올림)", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    const fee = result[0].AVERAGE_FEE;
    expect(Number.isInteger(fee)).toBe(true);
  });

  test("AVG와 ROUND 함수를 사용해야 한다", () => {
    const sql = helper.readSqlFile(SQL_FILE);
    const upperSql = sql.toUpperCase();

    expect(upperSql).toContain("AVG");
    expect(upperSql).toContain("ROUND");
  });
});
