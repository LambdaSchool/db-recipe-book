const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);
 module.exports = {
  getDishes: () => {
    return db("dishes")
      .then(rows => {
        console.log(rows);
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  addDish: (body) => {
    return db("dishes").insert({ ...body });
  },
  getDish:(id)=>{
    return db("dishes")
    .where({"dishes.id":id})
    .join('recipes','dishes.id','=','recipes.dish_id')
      .then(rows => {
        console.log(rows);
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  getRecipes: () => {
    return db("recipes")
    .join('dishes','recipes.dish_id','=','dishes.id')
       .then(rows => {
        console.log(rows);
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  addRecipe: (body) => {
    console.log(body)
    return db("recipes").insert({ ...body });
  },