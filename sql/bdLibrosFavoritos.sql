-- Table structure for table `usuarios_libros_favoritos`
CREATE TABLE `usuarios_libros_favoritos` (
  `usuario_id` int NOT NULL,
  `libro_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`, `libro_id`),
  FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`libro_id`) REFERENCES `libros` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;