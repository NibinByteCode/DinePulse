USE [dinepulse]
GO

-- tbl_roles
INSERT INTO [dbo].[tbl_roles] ([role_id], [role_name])
VALUES (1, 'admin');
GO

INSERT INTO [dbo].[tbl_roles] ([role_id], [role_name])
VALUES (2, 'user');
GO

INSERT INTO [dbo].[tbl_roles] ([role_id], [role_name])
VALUES (3, 'kitchen');
GO


-- tbl_users

INSERT INTO [dbo].[tbl_user] ([user_id], [user_name], [user_password], [user_type], [user_status], [user_registered_date])
VALUES (1, 'admin', 'admin', 'admin', 'active', '2024-06-05');
GO

INSERT INTO [dbo].[tbl_user] ([user_id], [user_name], [user_password], [user_type], [user_status], [user_registered_date])
VALUES (2, 'user', 'user', 'user', 'active', '2024-06-05');
GO

INSERT INTO [dbo].[tbl_user] ([user_id], [user_name], [user_password], [user_type], [user_status], [user_registered_date])
VALUES (3, 'kitchen', 'kitchen', 'kitchen', 'active', '2024-06-05');
GO

--tbl_table_detail

INSERT INTO [dbo].[tbl_table_detail] ([table_id], [table_number], [table_capacity], [table_status])
VALUES (1, 1, 4, 'Available');
GO

INSERT INTO [dbo].[tbl_table_detail] ([table_id], [table_number], [table_capacity], [table_status])
VALUES (2, 2, 2, 'Available');
GO

INSERT INTO [dbo].[tbl_table_detail] ([table_id], [table_number], [table_capacity], [table_status])
VALUES (3, 3, 6, 'Available');
GO

INSERT INTO [dbo].[tbl_table_detail] ([table_id], [table_number], [table_capacity], [table_status])
VALUES (4, 4, 4, 'Available');
GO

INSERT INTO [dbo].[tbl_table_detail] ([table_id], [table_number], [table_capacity], [table_status])
VALUES (5, 5, 8, 'Available');
GO

--tbl_slot

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (1, '12:00:00', '13:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (2, '13:00:00', '14:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (3, '14:00:00', '15:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (4, '15:00:00', '16:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (5, '16:00:00', '17:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (6, '17:00:00', '18:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (7, '18:00:00', '19:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (8, '19:00:00', '20:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (9, '20:00:00', '21:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (10, '21:00:00', '22:00:00');
GO

INSERT INTO [dbo].[tbl_slot] ([slot_id], [slot_start_time], [slot_end_time])
VALUES (11, '22:00:00', '23:00:00');
GO