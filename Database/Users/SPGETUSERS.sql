CREATE PROCEDURE sp_get_users

AS

SELECT * FROM users
WHERE isdeleted=0;

