-- 문제: 자동차 대여 기록에서 장기/단기 대여 구분하기
-- 레벨: 1
-- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/151138
--
-- 힌트:
-- 1. DATEDIFF(날짜1, 날짜2): 두 날짜 사이의 일수 계산
-- 2. MONTH(날짜): 날짜에서 월만 추출 (1~12)
-- 3. CASE WHEN 조건 THEN 값1 ELSE 값2 END: 조건 분기
-- 4. 대여 기간 = 종료일 - 시작일 + 1 (당일 포함)
-- 5. WHERE YEAR(날짜) = 2022 AND MONTH(날짜) = 9: 2022년 9월 필터링
--
-- WEEK4: 여기에 SQL을 작성하세요

SELECT
    HISTORY_ID,
    CAR_ID,
    DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE,
    DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE,
    CASE
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 30 THEN '장기 대여'
        ELSE '단기 대여'
    END AS RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE START_DATE BETWEEN '2022-09-01' AND '2022-09-30'
ORDER BY HISTORY_ID DESC;