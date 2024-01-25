CREATE DATABASE crm_systm;

CREATE TYPE role_type AS ENUM
('parent', 'student', 'admin', 'interested');

CREATE TABLE students(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int [] DEFAULT NULL,
    role  role_type DEFAULT 'student',
    parent_id INT DEFAULT NULL,
    about VARCHAR(460),
    created_at DATE DEFAULT now(),
    constraint fk_parent_id foreign key(parent_id) references users(id) 
);
CREATE TABLE register(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int DEFAULT NULL,

)

CREATE TABLE interested(
    id SERIAL PRIMARY KEY,
    name VARCHAT(80) NOT NULL,
    number NUMERIC NOT NULL
)




CREATE TABLE register_users()

CREATE TABLE employees (
    id INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    Position VARCHAR(50)
);

CREATE TABLE Courses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    start_date DATE,
    end_date DATE,
    instructor INT NOT NULL,
    constraint fk_instructor_id foreign key(instructor) references employees(id) 
);

CREATE TABLE training_rooms (
    id BIGSERIAL PRIMARY KEY,

)



CREATE TABLE brand_history(
 id int not null,
 name varchar(128),
 is_public boolean
);


CREATE FUNCTION fr_insert_group() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
   insert into brand_history(id, name)VALUES(new.id, new.name);
END;
$$;

CREATE TRIGGER rg_brand 
   AFTER INSERT
   ON brands
   FOR EACH ROW 
       EXECUTE PROCEDURE fr_insert_group();


   insert into brands(name)VALUES('new one');

DROP TRIGGER fr_insert_group;