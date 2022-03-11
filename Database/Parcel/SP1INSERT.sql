CREATE PROCEDURE sp_create_parcel(
@id Varchar(100), 
@description Varchar(100), 
@sender_number Varchar(13), 
@receiver_number Varchar(13),
@start_location Varchar(100), 
@end_location Varchar(100),  
@isdeleted INT,
@isupdated INT,
@issent INT,
@isdelivered INT,
@current_location Varchar(100),
@sender_id Varchar(100)
)
AS

INSERT INTO parcel VALUES(
@id, 
@description, 
@sender_number, 
@receiver_number,
@start_location, 
@end_location,  
@isdeleted,
@isupdated,
@issent,
@isdelivered,
@current_location,
@sender_id
);