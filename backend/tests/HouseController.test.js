import app from "../../app"; // Importez votre application Express
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import _ from "lodash";

// Importez le contrôleur à tester
import * as houseController from "../../controllers/houseController";

// Créez un mock pour le modèle House
jest.mock("../../models/House", () => ({
  create: jest.fn(),
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
}));

function logErrors(err, req, res, next) {
  return res.status(500).json(err);
}

describe("houseController", () => {
  const mockHouseData = {
    Type: faker.random.word(),
    Home_pic: faker.internet.url(),
    Location: faker.address.city(),
    House_Area: faker.random.numeric(4),
    Description: faker.lorem.paragraph(),
    Price: faker.finance.amount(),
    Owner: mongoose.Types.ObjectId(),
    Transaction_Type: faker.random.arrayElement(["Buy", "Rent"]),
  };

  it("should create a new house", async () => {
    const mockHouse = { ...mockHouseData, _id: mongoose.Types.ObjectId() };
    const req = { body: mockHouseData };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    houseController.House.create.mockResolvedValueOnce(mockHouse);

    await houseController.createHouse(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockHouse);
  }, 100000);

  it("should get all houses", async () => {
    const mockHouses = [mockHouseData];
    const req = {};
    const res = { json: jest.fn() };

    houseController.House.find.mockResolvedValueOnce(mockHouses);

    await houseController.getAllHouses(req, res);

    expect(res.json).toHaveBeenCalledWith(mockHouses);
  });

  it("should get house by id", async () => {
    const mockHouse = { ...mockHouseData, _id: mongoose.Types.ObjectId() };
    const req = { params: { id: mockHouse._id } };
    const res = { json: jest.fn() };

    houseController.House.findById.mockResolvedValueOnce(mockHouse);

    await houseController.getHouseById(req, res);

    expect(res.json).toHaveBeenCalledWith(mockHouse);
  });

  it("should update house", async () => {
    const mockHouse = { ...mockHouseData, _id: mongoose.Types.ObjectId() };
    const req = { params: { id: mockHouse._id }, body: mockHouseData };
    const res = { json: jest.fn() };

    houseController.House.findByIdAndUpdate.mockResolvedValueOnce(mockHouse);

    await houseController.updateHouse(req, res);

    expect(res.json).toHaveBeenCalledWith(mockHouse);
  });

  it("should delete house", async () => {
    const mockHouse = { ...mockHouseData, _id: mongoose.Types.ObjectId() };
    const req = { params: { id: mockHouse._id } };
    const res = { json: jest.fn() };

    houseController.House.findByIdAndDelete.mockResolvedValueOnce(mockHouse);

    await houseController.deleteHouse(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "House deleted successfully" });
  });
});