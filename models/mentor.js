module.exports = (sequelize, DataTypes) => {
  const Mentor = sequelize.define('Mentor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    expertise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experienceYears: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedinProfile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Mentor;
};
