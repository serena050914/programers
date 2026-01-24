import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { SqlTestHelper, createSqlTest } from "../../utils/sqlTestHelper";
import { resolve } from "path";

/**
 * 문제: 상품 별 오프라인 매출 구하기
 * 레벨: 2
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131533
 */

const SQL_FILE = resolve(__dirname, "sql/5_상품_별_오프라인_매출_구하기.sql");

describe("상품 별 오프라인 매출 구하기", () => {
  let sqlTest: ReturnType<typeof createSqlTest>;
  let helper: SqlTestHelper;

  beforeEach(() => {
    sqlTest = createSqlTest();
    helper = sqlTest.setup();
  });

  afterEach(() => {
    sqlTest.cleanup();
  });

  test("상품별 매출액 합계를 조회해야 한다", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    expect(result.length).toBeGreaterThan(0);
    result.forEach((row: any) => {
      expect(row).toHaveProperty("PRODUCT_CODE");
      expect(row).toHaveProperty("SALES");
    });
  });

  test("매출액 기준 내림차순, 상품코드 기준 오름차순으로 정렬되어야 한다", () => {
    const result = helper.executeSqlFile(SQL_FILE);

    for (let i = 0; i < result.length - 1; i++) {
      if (result[i].SALES === result[i + 1].SALES) {
        expect(result[i].PRODUCT_CODE <= result[i + 1].PRODUCT_CODE).toBe(true);
      } else {
        expect(result[i].SALES).toBeGreaterThanOrEqual(result[i + 1].SALES);
      }
    }
  });

  test("JOIN을 사용해야 한다", () => {
    const sql = helper.readSqlFile(SQL_FILE);
    const upperSql = sql.toUpperCase();

    expect(upperSql).toMatch(/JOIN|INNER JOIN/);
  });

  test("GROUP BY를 사용해야 한다", () => {
    const sql = helper.readSqlFile(SQL_FILE);
    const upperSql = sql.toUpperCase();

    expect(upperSql).toContain("GROUP BY");
  });
});
