-- CONTEUDO DO DIA

-- 1.Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT actor.actor_id, actor.first_name, film.film_id
FROM sakila.actor as actor
INNER JOIN sakila.film_actor as film
ON film.actor_id = actor.actor_id;


-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT st.first_name, st.last_name, ad.address
FROM sakila.staff as st
INNER JOIN sakila.address as ad
ON st.address_id = ad.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT c.customer_id, c.first_name, c.last_name, ad.address, ad.address_id
FROM sakila.customer as c
INNER JOIN sakila.address as ad
ON c.address_id = ad.address_id
ORDER BY first_name LIMIT 100;


-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT c.first_name, c.email, ad.address, ad.district
FROM sakila.address as ad
INNER JOIN sakila.customer as c
ON c.address_id = ad.address_id
WHERE c.first_name LIKE '%rene%';

SELECT * FROM sakila.staff;

SELECT * FROM sakila.payment;

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.payment as p
INNER JOIN sakila.staff as s
ON p.staff_id = s.staff_id
WHERE year(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;