CREATE PROCEDURE sp_get_parcels
AS

SELECT * FROM parcel
WHERE isdeleted=0;