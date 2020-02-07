module.exports = (sequelize, type) => {
  return sequelize.define(
    "Team",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      teamLogo: type.STRING,
      teamName: type.STRING,
      isDelete: {
        type: type.INTEGER,
        defaultValue: 0
      },
      createdBy: {
        type: type.INTEGER,
        defaultValue: 0
      },
      createdDate: {
        type: type.DATE,
        defaultValue: type.fn("NOW")
      },
      updatedBy: {
        type: type.INTEGER,
        defaultValue: 0
      },
      updatedDate: {
        type: type.DATE,
        defaultValue: type.fn("NOW")
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "team"
    }
  );
};
