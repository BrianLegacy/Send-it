CREATE PROCEDURE sp_get_auser(
@email Varchar(100)
)
AS

SELECT * FROM users
WHERE email=@email AND isdeleted=0;

