import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface AnimalRecord {
  ANIMAL_ID: string;
  ANIMAL_TYPE: string;
  DATETIME: string;
  INTAKE_CONDITION: string;
  NAME: string | null;
  SEX_UPON_INTAKE: string;
}

export class SqlTestHelper {
  private db: Database.Database;

  constructor() {
    // 메모리 DB 생성
    this.db = new Database(':memory:');
    this.setupTables();
    this.insertSampleData();
  }

  private setupTables() {
    // ANIMAL_INS 테이블 생성 (프로그래머스 SQL 문제에서 자주 사용)
    this.db.exec(`
      CREATE TABLE ANIMAL_INS (
        ANIMAL_ID VARCHAR(255) PRIMARY KEY,
        ANIMAL_TYPE VARCHAR(255) NOT NULL,
        DATETIME DATETIME NOT NULL,
        INTAKE_CONDITION VARCHAR(255) NOT NULL,
        NAME VARCHAR(255),
        SEX_UPON_INTAKE VARCHAR(255) NOT NULL
      )
    `);

    // ANIMAL_OUTS 테이블도 생성 (입양 관련 문제용)
    this.db.exec(`
      CREATE TABLE ANIMAL_OUTS (
        ANIMAL_ID VARCHAR(255) PRIMARY KEY,
        ANIMAL_TYPE VARCHAR(255) NOT NULL,
        DATETIME DATETIME NOT NULL,
        NAME VARCHAR(255),
        SEX_UPON_OUTCOME VARCHAR(255) NOT NULL
      )
    `);
  }

  private insertSampleData() {
    const insertAnimalIns = this.db.prepare(`
      INSERT INTO ANIMAL_INS (ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    // 샘플 데이터 삽입
    const sampleData = [
      ['A398035', 'Dog', '2014-05-16 14:08:00', 'Normal', 'Chewy', 'Spayed Female'],
      ['A381217', 'Dog', '2017-07-08 09:41:00', 'Sick', 'Cherokee', 'Neutered Male'], 
      ['A400680', 'Cat', '2017-06-17 13:29:00', 'Normal', 'Lucy', 'Spayed Female'],
      ['A403564', 'Dog', '2013-11-18 17:03:00', 'Normal', 'Anna', 'Spayed Female'],
      ['A394547', 'Dog', '2014-05-20 12:51:00', 'Normal', 'Honey', 'Spayed Female'],
      ['A368742', 'Dog', '2013-12-13 06:39:00', 'Normal', null, 'Neutered Male'],
      ['A370507', 'Cat', '2014-10-27 14:43:00', 'Sick', 'Emily', 'Spayed Female'],
      ['A414513', 'Dog', '2016-06-07 09:17:00', 'Normal', 'Rocky', 'Neutered Male']
    ];

    sampleData.forEach(data => {
      insertAnimalIns.run(...data);
    });
  }

  /**
   * SQL 파일 읽기
   */
  readSqlFile(filePath: string): string {
    try {
      const absolutePath = resolve(filePath);
      const content = readFileSync(absolutePath, 'utf-8');
      // 주석 제거 및 정리
      return content
        .split('\n')
        .filter(line => !line.trim().startsWith('--'))
        .join('\n')
        .trim();
    } catch (error) {
      throw new Error(`SQL 파일을 읽을 수 없습니다: ${filePath}\n${error}`);
    }
  }

  /**
   * SQL 파일 실행
   */
  executeSqlFile(filePath: string): any[] {
    const sql = this.readSqlFile(filePath);
    return this.executeQuery(sql);
  }

  /**
   * SQL 쿼리 실행 및 결과 반환
   */
  executeQuery(sql: string): any[] {
    try {
      const stmt = this.db.prepare(sql);
      return stmt.all();
    } catch (error) {
      throw new Error(`SQL 실행 오류: ${error}`);
    }
  }

  /**
   * SQL 쿼리 실행 후 특정 조건 검증
   */
  expectQuery(sql: string) {
    const results = this.executeQuery(sql);
    
    return {
      results,
      toHaveLength: (expectedLength: number) => results.length === expectedLength,
      toContainColumns: (columns: string[]) => {
        if (results.length === 0) return columns.length === 0;
        const resultColumns = Object.keys(results[0]);
        return columns.every(col => resultColumns.includes(col));
      },
      toBeOrderedBy: (column: string, order: 'ASC' | 'DESC' = 'ASC') => {
        if (results.length <= 1) return true;
        for (let i = 1; i < results.length; i++) {
          const prev = results[i - 1][column];
          const curr = results[i][column];
          if (order === 'ASC' && prev > curr) return false;
          if (order === 'DESC' && prev < curr) return false;
        }
        return true;
      },
      toMatchCondition: (condition: (row: any) => boolean) => {
        return results.every(condition);
      },
      toEqual: (expected: any[]) => {
        return JSON.stringify(results) === JSON.stringify(expected);
      }
    };
  }

  /**
   * 테스트 후 정리
   */
  cleanup() {
    this.db.close();
  }

  /**
   * 테이블 데이터 확인용
   */
  getAllAnimals(): AnimalRecord[] {
    return this.db.prepare('SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID').all() as AnimalRecord[];
  }

  /**
   * 커스텀 테스트 데이터 삽입
   */
  insertTestData(tableName: string, data: Record<string, any>[]) {
    if (data.length === 0) return;
    
    const columns = Object.keys(data[0]);
    const placeholders = columns.map(() => '?').join(', ');
    const sql = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${placeholders})`;
    
    const stmt = this.db.prepare(sql);
    data.forEach(row => {
      const values = columns.map(col => row[col]);
      stmt.run(...values);
    });
  }
}

/**
 * 테스트에서 쉽게 사용할 수 있는 헬퍼 함수
 */
export function createSqlTest() {
  let helper: SqlTestHelper;

  return {
    setup: () => {
      helper = new SqlTestHelper();
      return helper;
    },
    cleanup: () => {
      helper?.cleanup();
    },
    executeAndExpect: (sql: string) => {
      return helper.expectQuery(sql);
    }
  };
}