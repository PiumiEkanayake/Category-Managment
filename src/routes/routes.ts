import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import { multerMiddleWare } from "../middleware/multer.js";

export default function setRoutes(app: any) {
  const router = express();
  const categoryControl = new CategoryController();

  app.use("/api", router);

  //Category Routes
  router.route("/category").post(multerMiddleWare({ type: "single", path: "category" }), categoryControl.createCategory);
  router.route("/category").get(categoryControl.getAllCategory);
  router.route("/category/image/:name").get(categoryControl.getCategoryImage);
  router.route("/category/products/:name").get(categoryControl.getProductByCategory);
  router.route("/category/status").put(categoryControl.updateCategoryStatus);
  router.route("/category/:id").get(categoryControl.getCategoryById);
  router.route("/category/:id").put(multerMiddleWare({ type: "single", path: "category" }), categoryControl.updateCategory);
  router.route("/category/:id").delete(categoryControl.deleteCategory);
}
