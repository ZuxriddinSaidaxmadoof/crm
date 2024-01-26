CREATE DATABASE crm_systm;

CREATE TYPE role_type AS ENUM
('user', 'admin');

// STUDENTS - Oquv markazda oqiyotgan barcha studentlar

CREATE TABLE students(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int [] DEFAULT NULL,
    parent_id INT DEFAULT NULL,
    about VARCHAR(460),
    created_at DATE DEFAULT now(),
    constraint fk_parent_id foreign key(parent_id) references users(id) 
);

// STUDENT_COURSES - Studentning barcha oqiyotgan kurslari

CREATE TABLE student_courses(
    id BIGSERIAL PRIMARY KEY,
    student_id int not null,
    course_id int not null,
    constraint fk_student_id foreign key(student_id) references students(id),
    constraint fk_course_id foreign key(course_id) references courses(id) 
)

// USERS - Veb saytdan foydalanovchilar, registratsiya qilganlar

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int DEFAULT NULL,
    role role_type NOT NULL DEFAULT 'user',
    password TEXT
)


// FILES - studentlar va employerslar uchun profil rasmi

create table files (
id BIGSERIAL PRIMARY KEY,
original_name VARCHAR(80) NOT NULL,
path VARCHAR(250) NOT NULL,
size INT NOT NULL,
mine_type VARCHAR(80) NOT NULL,
date DATE DEFAULT CURRENT_DATE
);

insert into files (original_name, path, size, mine_type) values ('Cassie', '/c/desctop', 130, 'jpg');


// EMPLOYERS - Oquv markaz xodimlari

CREATE TABLE employees (
    id INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    Position VARCHAR(50)
);

// COURSES - Oquv markazdagi barcha kurslar

CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    start_date DATE,
    end_date DATE,
    instructor INT NOT NULL,
    constraint fk_instructor_id foreign key(instructor) references employees(id) 
);



/////////////////////////////////////////////////////////////END//////////////////////////////////////////////



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