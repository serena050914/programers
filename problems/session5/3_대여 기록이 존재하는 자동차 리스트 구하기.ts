import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { SqlTestHelper, createSqlTest } from "../../utils/sqlTestHelper";
import { resolve } from "path";

/**
 * 문제: 대여 기록이 존재하는 자동차 리스트 구하기
 * 레벨: 1
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/157341
 */

const SQL_FILE = resolve(
  __dirname,
  "sql/3_대여_기록이_존재하는_자동차_리스트_구하기.sql",
);

describe("대여 기록이 존재하는 자동차 리스트 구하기", () => {
  let sqlTest: ReturnType<typeof createSqlTest>;
  let helper: SqlTestHelper;

  beforeEach(() => {
    sqlTest = createSqlTest();
    helper = sqlTest.setup();
  });

  afterEach(() => {
    sqlTest.cleanup();
  });

  test("네비게이션 옵션이 포함된 자동차 리스트를 조회해야 한다", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    expect(result.length).toBeGreaterThan(0);
    result.forEach((row: any) => {
      expect(row.OPTIONS).toContain("네비게이션");
    });
  });

  test("CAR_ID 기준 내림차순으로 정렬되어야 한다", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].CAR_ID).toBeGreaterThanOrEqual(result[i + 1].CAR_ID);
    }
  });

  test("필요한 모든 컬럼이 있어야 한다", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    if (result.length > 0) {
      expect(result[0]).toHaveProperty("CAR_ID");
      expect(result[0]).toHaveProperty("CAR_TYPE");
      expect(result[0]).toHaveProperty("DAILY_FEE");
      expect(result[0]).toHaveProperty("OPTIONS");
    }
  });
});
