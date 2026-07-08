-- Atividade Das tabelas HappyPet
CREATE DATABASE Atividade;
use Atividade;
-- Tabela 1
CREATE TABLE Clientes (
cli INT PRIMARY KEY auto_increment,
dono VARCHAR (80) NOT NULL,
cpf VARCHAR (11) NOT NULL UNIQUE,
telefone VARCHAR (15) NOT NULL
);
-- Tabela 2
CREATE TABLE Veterinarios (
vet INT PRIMARY KEY auto_increment,
nome_vet VARCHAR (80) NOT NULL,
crmv VARCHAR (10) NOT NULL UNIQUE,
especialidade VARCHAR (50) NOT NULL
);
-- Tabela 3
CREATE TABLE Pets (
id_pet INT PRIMARY KEY auto_increment,
nome_pet VARCHAR (50) NOT NULL,
especie VARCHAR (30) NOT NULL,
raca VARCHAR (30) NOT NULL,
peso DECIMAL NOT NULL
);
-- Tabela 4
CREATE TABLE Consultas (
id_consulta INT PRIMARY KEY auto_increment,
data_consulta datetime NOT NULL,
valor_consulta DECIMAL NOT NULL,
diagnostico VARCHAR (255) NOT NULL
);