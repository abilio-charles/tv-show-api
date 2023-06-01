import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('postgres://user:pass@localhost:5432/tvshows-pg');

interface ShowInstance extends Model {
  id: string;
  title: string;
  premiere: Date;
  isRunning?: boolean;
  language: string;
  mainGenre: string;
  posterUrl?: string;
}

const Show = sequelize.define<ShowInstance>('Show', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Correção aqui
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  premiere: {
    type: DataTypes.DATE,
    allowNull: false
  },
  isRunning: DataTypes.BOOLEAN,
  language: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mainGenre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  posterUrl: DataTypes.STRING
});

export default Show;
