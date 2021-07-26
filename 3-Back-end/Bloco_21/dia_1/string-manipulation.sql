-- SELECT UCASE(title) FROM sakila.film LIMIT 10;
-- SELECT LCASE(title) FROM sakila.film LIMIT 10;
-- SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
-- SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
-- SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
-- SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;
-- SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
-- SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- set @texto := 'Você já ouviu falar do DuckDuckGo?';
-- select replace('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- select length('Uma frase qualquer');
-- select substring('A linguagem JavaScript está entre as mais usadas', 12, 12);

select lcase('RUA NORTE 1500, SÃO PAULO, BRASIL');