"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // yarn sequelize-cli db:seed:all (tạo theo dữ liệu có trong up seeder)
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John 2",
        lastName: "Doe 2",
        email: "example2@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John 3",
        lastName: "Doe 3",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // yarn sequelize-cli db:seed:undo (xóa theo dữ liệu có trong down seeder)
    return queryInterface.bulkDelete("Users", null, {});
  },
};
