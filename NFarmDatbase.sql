PGDMP     "                	    z           NFarm    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24576    NFarm    DATABASE     k   CREATE DATABASE "NFarm" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "NFarm";
                scrab    false                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24578    Usuarios    TABLE       CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    email character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);
    DROP TABLE public."Usuarios";
       public         heap    scrab    false            �            1259    24577    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          scrab    false    211            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public."Usuarios".id;
          public          scrab    false    210            ]           2604    24581    Usuarios id    DEFAULT     l   ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 <   ALTER TABLE public."Usuarios" ALTER COLUMN id DROP DEFAULT;
       public          scrab    false    210    211    211            �          0    24578    Usuarios 
   TABLE DATA           Y   COPY public."Usuarios" (id, nombre, email, estado, "createdAt", "updatedAt") FROM stdin;
    public          scrab    false    211   �       �           0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 13, true);
          public          scrab    false    210            a           2606    24586    Usuarios usuarios_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Usuarios" DROP CONSTRAINT usuarios_pkey;
       public            scrab    false    211            _           1259    24589    email_unique    INDEX     K   CREATE UNIQUE INDEX email_unique ON public."Usuarios" USING btree (email);
     DROP INDEX public.email_unique;
       public            scrab    false    211            �   �   x�3�tNL*J��,N.JL���KuH�M���K���,��".CcδԢ�ļ�|��x#ss#���$�FFF����
FV�V��z�F��Ĺ�8}J3�9s�DrI��%�qi �QuX��p��qqq ��1_     