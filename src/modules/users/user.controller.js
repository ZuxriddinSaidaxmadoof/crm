import { ResData } from "../../common/resData.js";
import {userSchema, loginSchema} from "./validation/user.schema.js";


export class UserController {
  #userService;
  constructor(userService) {
    this.#userService = userService;
  }

  async getAll(req, res) {
    
    try {
      const resData = await this.#userService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }

  async getOneById(req, res) {
    try {
      const id = req.params.id;
      const resData = await this.#userService.getOne(id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }

  async createBrand(req, res) {
    try {
      const validateResult = userSchema.validate(req.body);
      if(validateResult.error){
        throw new ResData(validateResult.error.message || "error on validation", 500, null, validateResult.error);
      }
      const resData = await this.#userService.create(req.body);
      res.status(resData.statusCode || 200).json(resData);

    } catch (error) {
      console.log(error);
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );
      res.status(resData.statusCode).json(resData);
    }
  }

  async createAdmin(req, res) {
    try {
      const validateResult = userSchema.validate(req.body);
      if(validateResult.error){
        throw new ResData(validateResult.error.message || "error on validation", 500, null, validateResult.error);
      }
      const resData = await this.#userService.createAdmin(req.body);
      res.status(resData.statusCode || 200).json(resData);

    } catch (error) {
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );
      res.status(resData.statusCode).json(resData);
    }
  }


  async login(req, res) {
    try {
      const validateResult = loginSchema.validate(req.body);
      if(validateResult.error){
        throw new ResData(validateResult.error.message || "error on validation", 400, null, validateResult.error);
      }
      const resData = await this.#userService.login(req.body, req,res);
      res.status(resData.statusCode || 200).json(resData);

    } catch (error) {
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );
      res.status(resData.statusCode).json(resData);
    }
  }

  async updateBrand(req, res) {
    try {
      const brandId = req.params.id;
      const validateResult = userSchema.validate(req.body);
      if(validateResult.error){
        throw new ResData(validateResult.error.message || "error on validation", 500, null, validateResult.error);
      }
      const resData = await this.#userService.update(req.body, brandId); 
      res.status(resData.statusCode || 200).json(resData);

    } catch (error) {
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );
      res.status(resData.statusCode).json(resData);
    }
  }

  async deleteBrand(req, res) {
    try {
      const brandId = req.params.id;
      const resData = await this.#userService.delete(brandId); 
      res.status(resData.statusCode || 200).json(resData);
    } catch (error) {
      const resData = new ResData(
        error.message,
        error.statusCode || 500,
        null,
        error
      );
      res.status(resData.statusCode).json(resData);
    }
  }
}
