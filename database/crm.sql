CREATE DATABASE crm_systm;

CREATE TYPE role_type AS ENUM
('user', 'admin');

// STUDENTS - Oquv markazda oqiyotgan barcha studentlar

CREATE TABLE students(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int [] DEFAULT NULL,
    about VARCHAR(460) DEFAULT null,
    file_id INT DEFAULT NULL,
    created_at DATE DEFAULT now(),
    constraint fk_file_id foreign key(file_id) references files(id)
);

select s.*,
    (select row_to_json(f)
    
    from files as f
    where f.id = s.file_id)
as file
from students as s;

INSERT INTO students(first_name, last_name, number,about)
VALUES ('Zuxriddin', 'Saidaxmadov', ARRAY[1, 2, 3, 4, 5], 'first');

// STUDENT_COURSES - Studentning barcha oqiyotgan kurslari

CREATE TABLE student_courses(
    id BIGSERIAL PRIMARY KEY,
    student_id int not null,
    course_id int not null,
    constraint fk_student_id foreign key(student_id) references students(id),
    constraint fk_course_id foreign key(course_id) references courses(id) 
);


// USERS - Veb saytdan foydalanovchilar, registratsiya qilganlar

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role role_type NOT NULL DEFAULT 'user'
);

INSERT INTO users(first_name, last_name, number,password, role)
VALUES ('Zuxriddin', 'Saidaxmadov', 99999, 'test', 'user');

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

CREATE TABLE employers (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    position VARCHAR(50),
    file_id INT DEFAULT NULL,
    constraint fk_file_id foreign key(file_id) references files(id) 
);

// COURSES - Oquv markazdagi barcha kurslar

CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT DEFAULT NULL,
    start_date DATE DEFAULT NULL,
    end_date DATE DEFAULT NULL,
    instructor INT NOT NULL,
    constraint fk_instructor_id foreign key(instructor) references employers(id) 
);


// ROOMS - Oquv markazdagi barcha xonalar

CREATE TABLE rooms (
    id BIGSERIAL,
    number int default null,
    name varchar(32) default null,
    floor int default null,
    capacity int default null
);


/////////////////////////////////////////////////////////////NEXT//////////////////////////////////////////////


CREATE TABLE student_history(
    id int not null,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int [] DEFAULT NULL,
    about VARCHAR(460) DEFAULT null,
    file_id INT DEFAULT NULL,
    created_at DATE DEFAULT now(),
    status varchar(20)
);

/// TRIGGER FUNCTIONS

// INSERT FUNCTION

CREATE FUNCTION fr_insert_student() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    INSERT INTO student_history(id, first_name, last_name, number,about,file_id,created_at,status)
    VALUES (new.id, new.first_name, new.last_name, new.number,new.about, new.file_id, new.created_at, 'insert');
    return new;
END
$$;

CREATE TRIGGER insert_trigger

   AFTER INSERT
   ON students
   FOR EACH ROW 
EXECUTE PROCEDURE fr_insert_student();


// UPDATE TRIGGER

CREATE FUNCTION fr_update_student() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    INSERT INTO student_history(id, first_name, last_name, number,about,file_id,created_at,status)
    VALUES (new.id, new.first_name, new.last_name, new.number,new.about, new.file_id, new.created_at, 'updated to');
    return new;
END
$$;

CREATE TRIGGER update_trigger

   AFTER UPDATE
   ON students
   FOR EACH ROW 
EXECUTE PROCEDURE fr_update_student();


// DELETE TRIGGER

CREATE FUNCTION fr_delete_student() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    INSERT INTO student_history(id, first_name, last_name, number,about,file_id,created_at,status)
    VALUES (old.id, old.first_name, old.last_name, old.number,old.about, old.file_id, old.created_at, 'deleted');
    return old;
END
$$;

CREATE TRIGGER delete_trigger

   AFTER DELETE
   ON students
   FOR EACH ROW 
EXECUTE PROCEDURE fr_delete_student();






