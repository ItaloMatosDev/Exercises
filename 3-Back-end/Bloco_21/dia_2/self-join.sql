-- CONTEUDO DO DIA

-- Exercicio 1
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;



-- SELECT a.actor_id, b.actor_id, a.first_name
-- FROM
-- actor a,
-- actor b
-- WHERE a.first_name = b.first_name;

-- SELECT a.address, c.city, x.country
-- FROM sakila.address as a
-- INNER JOIN sakila.city as c a.city_id = c.city_id
-- INNER JOIN country as x
-- ON x.country_id = c.country_id
-- WHERE x.country = 'Brazil'
-- ORDER BY c.city;