import { Router } from "express";
import productsRoutes from "./products.routes.js";

const router = Router();

// Aquí montamos las rutas de productos en /products
router.use("/products", productsRoutes);

export default router;