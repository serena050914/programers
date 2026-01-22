-- 문제: 흉부외과 또는 일반외과 의사 목록 출력하기
-- 레벨: 1
-- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/132203
--
-- 힌트:
-- 1. IN (값1, 값2): 여러 값 중 하나라도 일치하면 참 (OR 조건 간단하게)
-- 2. ORDER BY 컬럼1 DESC, 컬럼2 ASC: 다중 정렬 (1차 내림차순, 2차 오름차순)
-- 3. DATE_FORMAT(날짜, '%Y-%m-%d'): 날짜 포맷팅
--
-- WEEK4: 여기에 SQL을 작성하세요

SELECT
    DR_NAME,
    DR_ID,
    MCDP_CD,
    DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD IN ('CS', 'GS')
ORDER BY HIRE_YMD DESC, DR_NAME;