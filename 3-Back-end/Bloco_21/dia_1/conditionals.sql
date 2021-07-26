-- SELECT
--     first_name,
--     email,
--     CASE
--         WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
--         WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
--         WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
--         ELSE 'não classificado'
--     END AS valor
-- FROM sakila.customer
-- LIMIT 10;

-- SELECT
-- 	film_id, title,
--     IF(title = 'ACE GOLDFINGER',
--         'Ja assisti esse filme',
--         'Nao conheco esse filme') AS 'Conheco o filme?'
-- FROM
--     sakila.film;

SELECT 
    rating,
    title,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'Publico-alvo'
FROM
    sakila.film;